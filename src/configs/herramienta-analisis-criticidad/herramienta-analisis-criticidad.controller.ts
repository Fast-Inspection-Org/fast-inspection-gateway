import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { HerramientaDTO } from '../herramientas/dto/herramienta.dto';
import { UpdateHerramientaAnalisisCriticidadDTO } from './dto/update-herramienta-analisis-criticidad.dto';
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
import {
  HerramientaAnalisisCriticidadSerializable,
  HerramientaAnalisisCriticidadSerializableWithAllProperties,
} from './serializable/herramienta-analisis-criticicidad.serializable';
import { HerramientaSerializable } from '../herramientas/serializable/herramienta.serializable';
import { CampoSerializable } from '../campo/serializable/campo.serializable';

@ApiTags('Herramientas de Tipo Análisis de Criticidad')
@Controller('herramienta-analisis-criticidad')
export class HerramientaAnalisisCriticidadController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Post('createHerramientaAnalisisCriticidad')
  @ApiOperation({
    summary: 'Crear nueva herramienta de análisis de criticidad',
    description:
      'Crea una nueva herramienta de análisis de criticidad en el sistema con los parámetros proporcionados. Requiere permisos de administrador.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Herramienta creada exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: HerramientaDTO,
    description:
      'Objeto con los datos de la herramienta a crear. Incluye nombre, descripción y parámetros de configuración.',
  })
  public async createHerramientaAnalisisCriticidad(
    @Body() herramientaDTO: HerramientaDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'createHerramientaAnalisisCriticidad',
          herramientaDTO,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateHerramientaAnalisisCriticidad/:id')
  @ApiOperation({
    summary:
      'Actualizar una herramienta de análisis de criticidad ya existente',
    description:
      'Actualiza una herramienta de análisis de criticidad ya existente en el sistema con los parámetros proporcionados. Requiere permisos de roles.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Herramienta actualizada exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Identificador de la herramienta análisis de criticidad',
  })
  public async updateHerramientaAnalisisCriticidad(
    @Param('id') idHerramienta: number,
    @Body()
    updateHerramientaAnalisisCriticidadDTO: UpdateHerramientaAnalisisCriticidadDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateHerramientaAnalisisCriticidad', {
          idHerramienta: idHerramienta,
          updateHerramientaAnalisisCriticidadDTO:
            updateHerramientaAnalisisCriticidadDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getAllHerramientasAnalisisCriticidad')
  @ApiOperation({
    summary:
      'Obtener todas las herramientas análisis de criticidad con filtrado y páginado',
    description:
      'Obtener todas las herramientas análisis de criticidad con los filtros y páginado proporcionados. Requiere permisos de roles.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Array con cada una de las herrameintas análisis de criticidad que cumplen con las condiciones de los filtros y páginado',
    type: ApiPaginatedResponse(
      HerramientaAnalisisCriticidadSerializable,
      'Representa la lista de herramientas de tipo análisis de criticidad obtenidas como respuesta de la solicitud',
    ),
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiQuery({
    name: 'versionConfig',
    required: false,
    description:
      'Representa la versión de la configuración por la cual se desea filtrar',
  })
  @ApiQuery({
    name: 'nombre',
    required: false,
    description:
      'Representa el nombre de la configuración por la cual se desea filtrar',
  })
  public async getAll(
    @Query('versionConfig') versionConfig: String,
    @Query('nombre') nombre: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllHerramientasAnalisisCritcidad', {
          versionConfig: versionConfig,
          nombre: nombre,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getHerramientaAnalisisCriticidad/:id')
  @ApiOperation({
    summary:
      'Obtener la herramienta análisis de criticidad por su identificador',
    description:
      'Obtener la herramienta análisis de criticidad por su identificador. Requiere permisos de roles.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Un objeto que representa la herramienta análisis de criticidad especificada',
    type: HerramientaAnalisisCriticidadSerializableWithAllProperties,
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Identificador de la herramienta análisis de criticidad',
  })
  public async getHerramientaAnalisisCriticidad(
    @Param('id', ParseIntPipe) idHerramienta: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'getHerramientaAnalisisCriticidad',
          idHerramienta,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getCamposHerramienta/:id')
  @ApiOperation({
    summary:
      'Obtener el campo "campos" de una herramienta análisis de criticidad específico',
    description:
      'Obtener el campo "campos" de una herramienta análisis de criticidad específico. Requiere permisos de roles.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Un array con los campos pertenecientes a dicha herramienta análisis de criticidad',
    type: CampoSerializable,
    isArray: true,
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Identificador de la herramienta análisis de criticidad',
  })
  public async getCamposHerramienta(
    @Param('id', ParseIntPipe) idHerramienta: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getCamposHerramienta', idHerramienta),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
