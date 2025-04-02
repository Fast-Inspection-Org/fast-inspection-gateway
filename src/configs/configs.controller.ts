import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
  ParseIntPipe,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigDTO } from './dto/config.dto';
import { UpdateConfigDTO } from './dto/config-update.dto';
import {
  ConfigOrderBy,
  RolEnum,
  RpcError,
} from 'src/utils/interfaces-and-enums';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from 'src/users-auth/guards/auth.guard';
import { Roles } from 'src/decoradores/rol.decorator';
import { RolGuard } from 'src/users-auth/guards/rol/rol.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { apiResponses } from 'src/utils/api-responses';

@ApiTags('configs')
@Controller('configs')
export class ConfigsController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Get('getAllConfigs')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Obtener todas las configuraciones registradas',
    description:
      'Recupera todas las configuraciones del sistema con opción de filtrado y ordenamiento. Requiere permisos de administrador o especialista avanzado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de configuraciones recuperada exitosamente. Retorna un array de objetos de configuración.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiQuery({
    name: 'version',
    required: false,
    description: 'Filtra configuraciones por versión específica',
  })
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra configuraciones por nombre',
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    description: 'Campo por el cual ordenar los resultados',
    enum: ConfigOrderBy,
  })
  public async getAllConfigs(
    @Query('version') version: string,
    @Query('nombre') nombre: String,
    @Query('orderBy') orderBy: ConfigOrderBy,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllConfigs', {
          version: version,
          nombre: nombre,
          orderBy: orderBy,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getLastConfig')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Obtener la última configuración registrada',
    description:
      'Recupera la configuración más reciente creada en el sistema. Requiere permisos de administrador o especialista avanzado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Última configuración recuperada exitosamente. Retorna el objeto de configuración.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  public async getLastConfig() {
    try {
      return await firstValueFrom(this.configsClient.send('getLastConfig', {}));
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getConfigByVersion/:versionConfig')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Obtener configuración por versión específica',
    description:
      'Recupera una configuración específica basada en su número de versión. Requiere permisos de administrador o especialista avanzado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Configuración recuperada exitosamente. Retorna el objeto de configuración solicitado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'versionConfig',
    type: Number,
    description: 'Número de versión de la configuración a recuperar',
  })
  public async getConfigByVersion(
    @Param('versionConfig', ParseIntPipe) versionConfig: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getConfigByVersion', versionConfig),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createConfigByOtherConfig/:versionOtherConfig')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Crear nueva configuración basada en otra existente',
    description:
      'Crea una nueva configuración utilizando una versión existente como base. Requiere permisos de administrador o especialista avanzado.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Configuración creada exitosamente. Retorna el objeto de configuración creado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'versionOtherConfig',
    type: Number,
    description: 'Versión de la configuración que se usará como base',
  })
  @ApiBody({
    type: ConfigDTO,
    description: 'Objeto con los datos de la nueva configuración',
  })
  public async createConfigByOtherConfig(
    @Param('versionOtherConfig', ParseIntPipe) versionOtherConfig: number,
    @Body() configDTO: ConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('createConfigByOtherConfig', {
          versionOtherConfig: versionOtherConfig,
          configDTO: configDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createNewConfig')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Crear nueva configuración desde cero',
    description:
      'Crea una nueva configuración sin basarse en una existente. Requiere permisos de administrador o especialista avanzado.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Configuración creada exitosamente. Retorna el objeto de configuración creado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: ConfigDTO,
    description: 'Objeto con los datos de la nueva configuración',
  })
  public async saveNewConfig(@Body() newConfig: ConfigDTO) {
    try {
      return await firstValueFrom(
        this.configsClient.send('createNewConfig', newConfig),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('deleteConfig/:version')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Eliminar configuración específica',
    description:
      'Elimina permanentemente una configuración específica del sistema. Requiere permisos de super administrador.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Configuración eliminada exitosamente. Retorna el objeto de configuración eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'version',
    type: Number,
    description: 'Versión de la configuración a eliminar',
  })
  public async deleteConfig(
    @Param('version', ParseIntPipe) versionConfig: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteConfig', versionConfig),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('deleteAllConfigs')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Eliminar todas las configuraciones',
    description:
      'Elimina permanentemente todas las configuraciones del sistema. Requiere permisos de super administrador.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Todas las configuraciones eliminadas exitosamente. Retorna el conteo de configuraciones eliminadas.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  public async deletedeleteAllConfigs() {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteAllConfigs', {}),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateConfig/:version')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Actualizar configuración existente',
    description:
      'Modifica los campos de una configuración existente. Requiere permisos de administrador o especialista avanzado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Configuración actualizada exitosamente. Retorna el objeto de configuración actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'version',
    type: Number,
    description: 'Versión de la configuración a actualizar',
  })
  @ApiBody({
    type: UpdateConfigDTO,
    description: 'Objeto con los campos a actualizar',
  })
  public async updateConfig(
    @Param('version', ParseIntPipe) version: number,
    @Body() updateConfigDTO: UpdateConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateConfig', {
          version: version,
          updateConfigDTO: updateConfigDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('marcarAsActivaConfig/:version')
  @Roles([
    RolEnum.SuperAdministrador,
    RolEnum.Administrador,
    RolEnum.EspecialistaAvz,
  ])
  @UseGuards(AuthGuard, RolGuard)
  @ApiOperation({
    summary: 'Marcar configuración como activa',
    description:
      'Establece una configuración específica como la activa en el sistema. Requiere permisos de administrador o especialista avanzado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Configuración marcada como activa exitosamente. Retorna el objeto de configuración actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'version',
    type: Number,
    description: 'Versión de la configuración a marcar como activa',
  })
  public async marcarAsActivaConfig(
    @Param('version', ParseIntPipe) version: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('marcarAsActivaConfig', version),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
