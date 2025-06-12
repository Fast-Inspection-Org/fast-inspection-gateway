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
import { SubsistemaConfigDTO } from './dto/subsistema-config.dto';
import { UpdateSubsistemaConfigDTO } from './dto/update-subsistema-config.dto';
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
import { ApiPaginatedResponse, apiResponses } from 'src/utils/api-responses';
import { SubsistemaConfigSerializable } from './serializable/subsistema-config.serializable';

@ApiTags('Subsistemas de una Configuración')
@Controller('subsistemas-config')
export class SubsistemasConfigController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Get('getAllSubsistemasConfig/:idSistemaConfig')
  @ApiOperation({
    summary: 'Obtener todos los subsistemas de configuración',
    description:
      'Recupera todos los subsistemas de configuración asociados a un sistema específico, con opción de filtrado por nombre.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de subsistemas de configuración recuperada exitosamente. Retorna un array de objetos.',
    type: ApiPaginatedResponse(
      SubsistemaConfigSerializable,
      'Representa la lista de subsistemas obtenidos como respuesta de la solicitud',
    ),
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'idSistemaConfig',
    type: Number,
    description:
      'ID del sistema de configuración al que pertenecen los subsistemas',
  })
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra subsistemas por nombre (búsqueda parcial)',
  })
  public async getAllSubsistemasConfig(
    @Param('idSistemaConfig', ParseIntPipe) idSistemaConfig,
    @Query('nombre') nombre: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllSubsistemasConfig', {
          idSistemaConfig: idSistemaConfig,
          nombre: nombre,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getSubsistemaConfig/:id')
  @ApiOperation({
    summary: 'Obtener el subsistema por su identificador',
    description:
      'Recupera todos los subsistemas de configuración asociados a un sistema específico, con opción de filtrado por nombre.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de subsistemas de configuración recuperada exitosamente. Retorna un array de objetos.',
    type: ApiPaginatedResponse(
      SubsistemaConfigSerializable,
      'Representa la lista de subsistemas obtenidos como respuesta de la solicitud',
    ),
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del subsistema que se desea obtener',
  })
  public async getSubsistemaConfig(
    @Param('id', ParseIntPipe) id,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getSubsistemaConfig', id),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createSubsistemaConfig')
  @ApiOperation({
    summary: 'Crear nuevo subsistema de configuración',
    description: 'Registra un nuevo subsistema de configuración en el sistema.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Subsistema de configuración creado exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: SubsistemaConfigDTO,
    description: 'Objeto con los datos del subsistema de configuración a crear',
  })
  public async createSubsistemaConfig(
    @Body() subsistemaConfigDTO: SubsistemaConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('createSubsistemaConfig', subsistemaConfigDTO),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateSubsistemaConfig/:id')
  @ApiOperation({
    summary: 'Actualizar subsistema de configuración',
    description:
      'Modifica los datos de un subsistema de configuración existente.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Subsistema de configuración actualizado exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del subsistema de configuración a actualizar',
  })
  @ApiBody({
    type: UpdateSubsistemaConfigDTO,
    description:
      'Objeto con los campos a actualizar del subsistema de configuración',
  })
  public async updateSubsistemaConfig(
    @Param('id', ParseIntPipe) idSubsistemaConfig: number,
    @Body() updateSubsistemaConfigDTO: UpdateSubsistemaConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateSubsistemaConfig', {
          idSubsistemaConfig: idSubsistemaConfig,
          updateSubsistemaConfigDTO: updateSubsistemaConfigDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('deleteSubsistemaConfig/:id')
  @ApiOperation({
    summary: 'Eliminar subsistema de configuración',
    description:
      'Elimina permanentemente un subsistema de configuración del sistema.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Subsistema de configuración eliminado exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del subsistema de configuración a eliminar',
  })
  public async deleteSubsistemaConfig(
    @Param('id', ParseIntPipe) idSubsistemaConfig: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteSubsistemaConfig', idSubsistemaConfig),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
