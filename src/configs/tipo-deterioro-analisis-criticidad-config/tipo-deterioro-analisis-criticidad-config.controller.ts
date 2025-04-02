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
import { UpdateTipoDeterioroAnalisisCriticidadConfigDTO } from './dto/update-tipo-deterioro-analisis-criticidad-config.dt';
import { TipoDeterioroConfigDTO } from '../tipo-deterioros-config/dto/tipo-deterioro-config.dto';
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

@ApiTags('Tipos de deterioro Análisis de Criticidad de una Configuración')
@Controller('tipo-deterioro-analisis-criticidad-config')
export class TipoDeterioroAnalisisCriticidadConfigController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Get('getAllTiposDeteriorosAnalisisCriticidadConfig/:idMaterialConfig')
  @ApiOperation({
    summary: 'Obtener tipos de deterioro para análisis de criticidad',
    description:
      'Recupera todos los tipos de deterioro asociados a un material específico para análisis de criticidad.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de tipos de deterioro recuperada exitosamente. Retorna un array de objetos.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'idMaterialConfig',
    type: Number,
    description:
      'ID del material de configuración al que pertenecen los tipos de deterioro',
  })
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra tipos de deterioro por nombre (búsqueda parcial)',
  })
  public async getAllTiposDeteriorosConfig(
    @Param('idMaterialConfig', ParseIntPipe) idMaterialConfig: number,
    @Query('nombre') nombre: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'getAllTiposDeteriorosAnalisisCriticidadConfig',
          {
            idMaterialConfig: idMaterialConfig,
            nombre: nombre,
          },
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getTipoDeterioroAnalisisCriticidad/:id')
  @ApiOperation({
    summary: 'Obtener tipo de deterioro específico',
    description:
      'Recupera un tipo de deterioro específico para análisis de criticidad por su ID.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Tipo de deterioro recuperado exitosamente. Retorna el objeto solicitado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del tipo de deterioro a recuperar',
  })
  public async getTipoDeterioroAnalisisCriticidad(
    @Param('id', ParseIntPipe) idTipoDeterioro: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'getTipoDeterioroAnalisisCriticidad',
          idTipoDeterioro,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createTipoDeterioroAnalisisCriticidadConfig')
  @ApiOperation({
    summary: 'Crear nuevo tipo de deterioro para análisis de criticidad',
    description:
      'Registra un nuevo tipo de deterioro específico para análisis de criticidad.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Tipo de deterioro creado exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: TipoDeterioroConfigDTO,
    description: 'Objeto con los datos del tipo de deterioro a crear',
  })
  public async createTipoDeterioroAnalisisCriticidadConfig(
    @Body() tipoDeterioroConfigDTO: TipoDeterioroConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'createTipoDeterioroAnalisisCriticidadConfig',
          tipoDeterioroConfigDTO,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateTipoDeterioroAnalisisCriticidad/:id')
  @ApiOperation({
    summary: 'Actualizar tipo de deterioro para análisis de criticidad',
    description:
      'Modifica los datos de un tipo de deterioro existente para análisis de criticidad.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Tipo de deterioro actualizado exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del tipo de deterioro a actualizar',
  })
  @ApiBody({
    type: UpdateTipoDeterioroAnalisisCriticidadConfigDTO,
    description: 'Objeto con los campos a actualizar del tipo de deterioro',
  })
  public async updateTipoDeterioroAnalisisCriticidad(
    @Param('id', ParseIntPipe) idTipoDeterioro: number,
    @Body()
    updateTipoDeterioroAnalisisCriticidadDTO: UpdateTipoDeterioroAnalisisCriticidadConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateTipoDeterioroAnalisisCriticidad', {
          idTipoDeterioro: idTipoDeterioro,
          updateTipoDeterioroAnalisisCriticidadDTO:
            updateTipoDeterioroAnalisisCriticidadDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
