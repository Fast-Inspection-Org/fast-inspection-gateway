import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Query, ParseIntPipe, Req } from '@nestjs/common';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigDTO } from './dto/config.dto';
import { UpdateConfigDTO } from './dto/config-update.dto';
import { ConfigOrderBy } from 'src/utils/interfaces-and-enums';

@Controller('configs')
export class ConfigsController {
  constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }


  @Get("getAllConfigs") // Ruta para obtener todas las configuraciones registradas
  public async getAllConfigs(@Query("version") version: string, @Query("nombre") nombre: String, @Query("orderBy") orderBy: ConfigOrderBy /* parametros representa los filtros de búsqueda */) {
    return this.configsClient.send('getAllConfigs', {
      version: version,
      nombre: nombre,
      orderBy: orderBy
    })
  }

  @Get("getLastConfig") // Ruta para obtener la ultima configuración registrada
  public async getLastConfig() {
    return this.configsClient.send('getLastConfig', {})
  }

  @Get("getConfigByVersion/:versionConfig") // Ruta para obtener la configuración con una versión en específico
  public async getConfigByVersion(@Param("versionConfig", ParseIntPipe) versionConfig: number) {
    return this.configsClient.send('getConfigByVersion', versionConfig)
  }


  @Post("createConfigByOtherConfig/:versionOtherConfig")
  public async createConfigByOtherConfig(@Param("versionOtherConfig", ParseIntPipe) versionOtherConfig: number, @Body() configDTO: ConfigDTO) {
    return this.configsClient.send('createConfigByOtherConfig', {
      versionOtherConfig: versionOtherConfig,
      configDTO: configDTO
    })
  }

  @Post("createNewConfig")
  //@UseGuards(AuthGuard) // verifica el acceso a la solicitud
  public async saveNewConfig(@Body() newConfig: ConfigDTO) {
    return this.configsClient.send('createNewConfig', newConfig)
  }

  @Delete("deleteConfig/:version") // Ruta para eliminar una configuración en especifico (Método de super administrador)

  public async deleteConfig(@Param("version", ParseIntPipe) versionConfig: number) {
    return this.configsClient.send('deleteConfig', versionConfig)
  }

  @Delete("deleteAllConfigs") // Ruta para eliminar todas las configuraciones (Método de super administrador)
  public async deletedeleteAllConfigs() {
    return this.configsClient.send('deleteAllConfigs', {})
  }

  @Patch("updateConfig/:version")
  public async updateConfig(@Param("version", ParseIntPipe) version: number, @Body() updateConfigDTO: UpdateConfigDTO) {
    return this.configsClient.send('updateConfig', {
      version: version,
      updateConfigDTO: updateConfigDTO
    })
  }

  @Patch("marcarAsActivaConfig/:version")
  public async marcarAsActivaConfig(@Param("version", ParseIntPipe) version: number) {
    return this.configsClient.send('marcarAsActivaConfig', version)
  }
}
