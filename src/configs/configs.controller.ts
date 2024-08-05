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

  }

  @Get("getLastConfig") // Ruta para obtener la ultima configuración registrada
  public async getLastConfig() {


  }

  @Get("getConfigByVersion/:versionConfig") // Ruta para obtener la configuración con una versión en específico
  public async getConfigByVersion(@Param("versionConfig", ParseIntPipe) versionConfig: number) {

  }


  @Post("createConfigByOtherConfig/:versionOtherConfig")

  public async createConfigByOtherConfig(@Param("versionOtherConfig", ParseIntPipe) versionOtherConfig: number, @Body() configDTO: ConfigDTO) {

  }

  @Post("createNewConfig")
  //@UseGuards(AuthGuard) // verifica el acceso a la solicitud
  public async saveNewConfig(@Body() newConfig: ConfigDTO) {
    // se debe registrar traza
  }

  @Delete("deleteConfig/:version") // Ruta para eliminar una configuración en especifico (Método de super administrador)

  public async deleteConfig(@Param("version", ParseIntPipe) versionConfig: number) {

  }

  @Delete("deleteAllConfigs") // Ruta para eliminar todas las configuraciones (Método de super administrador)
  public async deletedeleteAllConfigs() {

  }

  @Patch("updateConfig/:version")

  public async updateConfig(@Param("version", ParseIntPipe) version: number, @Body() updateConfigDTO: UpdateConfigDTO) {

  }

  @Patch("marcarAsActivaConfig/:version")
  public async marcarAsActivaConfig(@Param("version", ParseIntPipe) version: number) {

  }
}
