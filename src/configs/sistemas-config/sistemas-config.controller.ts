import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SistemaConfigDTO } from './dto/sistema-config.dto';
import { UpdateSistemaConfigDTO } from './dto/update-sistema-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { apiResponses } from 'src/utils/api-responses';

@ApiTags('sistemas-config')
@Controller('sistemas-config')
export class SistemasConfigController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Post('createSistemaConfig')
  @ApiOperation({
    summary: 'Crear nueva configuración de sistema',
    description:
      'Crea una nueva configuración de sistema en la base de datos con los parámetros proporcionados.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Configuración de sistema creada exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: SistemaConfigDTO,
    description: 'Objeto con los datos de la configuración de sistema a crear.',
  })
  public async createSistemaConfig(@Body() sistemaConfigDTO: SistemaConfigDTO) {
    try {
      return await firstValueFrom(
        this.configsClient.send('createSistemaConfig', sistemaConfigDTO),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateSistemaConfig/:id')
  @ApiOperation({
    summary: 'Actualizar configuración de sistema existente',
    description:
      'Modifica los campos de una configuración de sistema existente.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Configuración de sistema actualizada exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID único de la configuración de sistema a actualizar',
  })
  @ApiBody({
    type: UpdateSistemaConfigDTO,
    description: 'Objeto con los campos a actualizar.',
  })
  public async updateSistemaConfig(
    @Param('id', ParseIntPipe) idSistemaConfig: number,
    @Body() updateSistemaConfigDTO: UpdateSistemaConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateSistemaConfig', {
          idSistemaConfig: idSistemaConfig,
          updateSistemaConfigDTO: updateSistemaConfigDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getAllSistemasConfig')
  @ApiOperation({
    summary: 'Obtener todas las configuraciones de sistema',
    description:
      'Recupera todas las configuraciones de sistema registradas en el sistema.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de configuraciones de sistema recuperada exitosamente. Retorna un array de objetos.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  public async getAllSistemasConfig() {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllSistemasConfig', {}),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getAllBelongConfig/:version')
  @ApiOperation({
    summary: 'Obtener configuraciones pertenecientes a una versión',
    description:
      'Recupera configuraciones de sistema filtradas por versión y otros parámetros opcionales.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de configuraciones filtradas recuperada exitosamente. Retorna un array de objetos.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'version',
    type: Number,
    description: 'Versión de configuración por la cual filtrar',
  })
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra configuraciones por nombre del sistema',
  })
  @ApiQuery({
    name: 'nombreHerramienta',
    required: false,
    description: 'Filtra configuraciones por nombre de herramienta asociada',
  })
  public async getAllBelongConfig(
    @Param('version') versionConfig: number,
    @Query('nombre') nombre: String,
    @Query('nombreHerramienta') nombreHerramienta: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllBelongConfig', {
          versionConfig: versionConfig,
          nombre: nombre,
          nombreHerramienta,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('deleteSistemaConfig/:id')
  @ApiOperation({
    summary: 'Eliminar configuración de sistema',
    description:
      'Elimina permanentemente una configuración de sistema específica.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Configuración de sistema eliminada exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID único de la configuración de sistema a eliminar',
  })
  public async deleteSistemaConfig(
    @Param('id', ParseIntPipe) idSistema: number,
  ) {
    try {
      return firstValueFrom(
        this.configsClient.send('deleteSistemaConfig', idSistema),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getHerramientaSistemaMaterial/:idMaterial/:versionConfig')
  @ApiOperation({
    summary: 'Obtener herramienta por sistema y material',
    description:
      'Recupera información de herramientas asociadas a un sistema y material específicos.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Información de herramienta recuperada exitosamente. Retorna el objeto solicitado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'idMaterial',
    type: Number,
    description: 'ID del material por el cual filtrar',
  })
  @ApiParam({
    name: 'versionConfig',
    type: Number,
    description: 'Versión de configuración por la cual filtrar',
  })
  public async getHerramientaSistemaMaterial(
    @Param('idMaterial', ParseIntPipe) idMaterial: number,
    @Param('versionConfig', ParseIntPipe) versionConfig: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getHerramientaSistemaMaterial', {
          idMaterial: idMaterial,
          versionConfig: versionConfig,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
