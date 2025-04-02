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
import { UpdateIndiceCalculableSinIntervaloDTO } from './dto/update-indice-calculable-sin-intervalo.dto';
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
import { apiResponses } from 'src/utils/api-responses';

@ApiTags('indices-calculables-sin-intervalo')
@Controller('indice-calculable-sin-intervalo')
export class IndiceCalculableSinIntervaloController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Get('getAllIndicesCalculablesSinIntervalos')
  @ApiOperation({
    summary: 'Obtener todos los índices calculables sin intervalo',
    description:
      'Recupera todos los índices calculables sin intervalo registrados en el sistema con opción de filtrado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de índices calculables sin intervalo recuperada exitosamente. Retorna un array de objetos.',
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
  public async getAllIndicesCalculablesSinIntervalos(
    @Query('nombre') nombre: String,
    @Query('calculo') calculo: Calculos,
    @Query('versionConfig') versionConfig: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllIndicesCalculablesSinIntervalos', {
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

  @Get('getIndiceCalculableSinIntervalo/:id')
  @ApiOperation({
    summary: 'Obtener índice calculable sin intervalo específico',
    description:
      'Recupera un índice calculable sin intervalo específico por su ID.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Índice calculable sin intervalo recuperado exitosamente. Retorna el objeto solicitado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del índice calculable sin intervalo a recuperar',
  })
  public async getIndiceCalculableSinIntervalo(
    @Param('id', ParseIntPipe) idIndiceCalculable: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'getIndiceCalculableSinIntervalo',
          idIndiceCalculable,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createIndiceCalculableSinIntervalo')
  @ApiOperation({
    summary: 'Crear nuevo índice calculable sin intervalo',
    description:
      'Registra un nuevo índice calculable sin intervalo en el sistema.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Índice calculable sin intervalo creado exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: IndiceCalculableDTO,
    description:
      'Objeto con los datos del índice calculable sin intervalo a crear',
  })
  public async createIndiceCalculableSinIntervalo(
    @Body() indiceCalculableSinIntervaloDTO: IndiceCalculableDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send(
          'createIndiceCalculableSinIntervalo',
          indiceCalculableSinIntervaloDTO,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateIndiceCalculableSinIntervalo/:id')
  @ApiOperation({
    summary: 'Actualizar índice calculable sin intervalo',
    description:
      'Modifica los datos de un índice calculable sin intervalo existente.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Índice calculable sin intervalo actualizado exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del índice calculable sin intervalo a actualizar',
  })
  @ApiBody({
    type: UpdateIndiceCalculableSinIntervaloDTO,
    description:
      'Objeto con los campos a actualizar del índice calculable sin intervalo',
  })
  public async updateIndiceCalculableSinIntervalo(
    @Param('id', ParseIntPipe) idIndiceCalculable: number,
    @Body()
    updateIndiceCalculableSinIntervaloDTO: UpdateIndiceCalculableSinIntervaloDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateIndiceCalculableSinIntervalo', {
          idIndiceCalculable,
          updateIndiceCalculableSinIntervaloDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
