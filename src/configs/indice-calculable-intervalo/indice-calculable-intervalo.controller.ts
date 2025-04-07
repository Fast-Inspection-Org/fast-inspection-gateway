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
import { Calculos, RpcError } from 'src/utils/interfaces-and-enums';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { UpdateIndiceCalculableIntervaloDTO } from './dto/update-indice-calculable-intervalo.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ApiPaginatedResponse, apiResponses } from 'src/utils/api-responses';
import { IndiceCalculableIntervaloSerializable } from './serializable/indice-calculable-intervalo.serializable';

@ApiTags('Indices Calculables con Intervalo de una Configuración')
@Controller('indice-calculable-intervalo')
export class IndiceCalculableIntervaloController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Get('getAllIndicesCalculablesIntervalos')
  @ApiOperation({
    summary: 'Obtener todos los índices calculables con intervalo',
    description:
      'Recupera todos los índices calculables con intervalo registrados en el sistema con opción de filtrado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de índices calculables con intervalo recuperada exitosamente. Retorna un array de objetos.',
    type: ApiPaginatedResponse(
      IndiceCalculableIntervaloSerializable,
      'Representa la lista de indices calculables de tipo intervalo obtenidos como respuesta de la solicitud',
    ),
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra índices por nombre (búsqueda parcial)',
  })
  @ApiQuery({
    name: 'calculo',
    required: false,
    description: 'Filtra índices por tipo de cálculo',
    enum: Calculos,
  })
  @ApiQuery({
    name: 'versionConfig',
    required: false,
    description: 'Filtra índices por versión de configuración',
  })
  public async getAllIndicesCalculablesIntervalos(
    @Query('nombre') nombre: String,
    @Query('calculo') calculo: Calculos,
    @Query('versionConfig') versionConfig: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllIndicesCalculablesIntervalos', {
          nombre: nombre,
          calculo: calculo,
          versionConfig: versionConfig,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getIndiceCalculableIntervalo/:id')
  @ApiOperation({
    summary: 'Obtener índice calculable con intervalo específico',
    description:
      'Recupera un índice calculable con intervalo específico por su ID.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Índice calculable con intervalo recuperado exitosamente. Retorna el objeto solicitado.',
    type: IndiceCalculableIntervaloSerializable,
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del índice calculable con intervalo a recuperar',
  })
  public async getIndiceCalculableIntervalo(
    @Param('id', ParseIntPipe) idIndiceCalculable: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'getIndiceCalculableIntervalo',
          idIndiceCalculable,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createIndiceCalculableIntervalo')
  @ApiOperation({
    summary: 'Crear nuevo índice calculable con intervalo',
    description:
      'Registra un nuevo índice calculable con intervalo en el sistema.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Índice calculable con intervalo creado exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: IndiceCalculableDTO,
    description:
      'Objeto con los datos del índice calculable con intervalo a crear',
  })
  public async createIndiceCalculableIntervalo(
    @Body() indiceCalculableIntervaloDTO: IndiceCalculableDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'createIndiceCalculableIntervalo',
          indiceCalculableIntervaloDTO,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateIndiceCalculableIntervalo/:id')
  @ApiOperation({
    summary: 'Actualizar índice calculable con intervalo',
    description:
      'Modifica los datos de un índice calculable con intervalo existente.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Índice calculable con intervalo actualizado exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del índice calculable con intervalo a actualizar',
  })
  @ApiBody({
    type: UpdateIndiceCalculableIntervaloDTO,
    description:
      'Objeto con los campos a actualizar del índice calculable con intervalo',
  })
  public async updateIndiceCalculableIntervalo(
    @Param('id', ParseIntPipe) idIndiceCalculable: number,
    @Body()
    updateIndiceCalculableIntervaloDTO: UpdateIndiceCalculableIntervaloDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateIndiceCalculableIntervalo', {
          idIndiceCalculable,
          updateIndiceCalculableIntervaloDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
