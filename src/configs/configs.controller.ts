import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Query, ParseIntPipe, Req, HttpException, BadRequestException, UseGuards } from '@nestjs/common';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ConfigDTO } from './dto/config.dto';
import { UpdateConfigDTO } from './dto/config-update.dto';
import { ConfigOrderBy, RolEnum, RpcError } from 'src/utils/interfaces-and-enums';
import { firstValueFrom } from 'rxjs';
import { ExceptionFilter } from 'src/utils/exeption-filter';
import { AuthGuard } from 'src/users-auth/guards/auth.guard';
import { Roles } from 'src/decoradores/rol.decorator';
import { RolGuard } from 'src/users-auth/guards/rol/rol.guard';

@Controller('configs')
export class ConfigsController {
  constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }


  @Get("getAllConfigs") // Ruta para obtener todas las configuraciones registradas
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  public async getAllConfigs(@Query("version") version: string, @Query("nombre") nombre: String, @Query("orderBy") orderBy: ConfigOrderBy /* parametros representa los filtros de búsqueda */) {
    try {
      return await firstValueFrom(this.configsClient.send('getAllConfigs', {
        version: version,
        nombre: nombre,
        orderBy: orderBy
      }))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  @Get("getLastConfig") // Ruta para obtener la ultima configuración registrada
  public async getLastConfig() {
    try {
      return await firstValueFrom(this.configsClient.send('getLastConfig', {}))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  @Get("getConfigByVersion/:versionConfig") // Ruta para obtener la configuración con una versión en específico
  public async getConfigByVersion(@Param("versionConfig", ParseIntPipe) versionConfig: number) {
    try {
      return await firstValueFrom(this.configsClient.send('getConfigByVersion', versionConfig))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  @Post("createConfigByOtherConfig/:versionOtherConfig")
  public async createConfigByOtherConfig(@Param("versionOtherConfig", ParseIntPipe) versionOtherConfig: number, @Body() configDTO: ConfigDTO) {
    try {
      return await firstValueFrom(this.configsClient.send('createConfigByOtherConfig', {
        versionOtherConfig: versionOtherConfig,
        configDTO: configDTO
      }))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Post("createNewConfig")
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  public async saveNewConfig(@Body() newConfig: ConfigDTO) {
    try {
      return await firstValueFrom(this.configsClient.send('createNewConfig', newConfig))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Delete("deleteConfig/:version") // Ruta para eliminar una configuración en especifico (Método de super administrador)
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  public async deleteConfig(@Param("version", ParseIntPipe) versionConfig: number) {
    try {
      return await firstValueFrom(this.configsClient.send('deleteConfig', versionConfig))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Delete("deleteAllConfigs") // Ruta para eliminar todas las configuraciones (Método de super administrador)
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  public async deletedeleteAllConfigs() {
    try {
      return await firstValueFrom(this.configsClient.send('deleteAllConfigs', {}))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Patch("updateConfig/:version")
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  public async updateConfig(@Param("version", ParseIntPipe) version: number, @Body() updateConfigDTO: UpdateConfigDTO) {
    try {
      return await firstValueFrom(this.configsClient.send('updateConfig', {
        version: version,
        updateConfigDTO: updateConfigDTO
      }))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Patch("marcarAsActivaConfig/:version")
  @Roles([RolEnum.SuperAdministrador, RolEnum.Administrador, RolEnum.EspecialistaAvz]) // solo un administrador o especialista avanzado puede usar esta petición
  @UseGuards(AuthGuard, RolGuard) // verifica el acceso a la solicitud
  public async marcarAsActivaConfig(@Param("version", ParseIntPipe) version: number) {
    try {
      return await firstValueFrom(this.configsClient.send('marcarAsActivaConfig', version))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }
}
