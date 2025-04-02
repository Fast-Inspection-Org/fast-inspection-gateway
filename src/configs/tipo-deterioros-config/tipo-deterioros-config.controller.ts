import {
  Controller,
  Delete,
  HttpException,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { NameConfigsService } from 'src/utils/global';
import { RpcError } from 'src/utils/interfaces-and-enums';
import { apiResponses } from 'src/utils/api-responses';

@ApiTags('Tipos de Deterioros de una Configuración')
@Controller('tipo-deterioros-config')
export class TipoDeteriorosConfigController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Delete('deleteTipoDeterioroConfig/:id')
  @ApiOperation({
    summary: 'Eliminar tipo de deterioro',
    description:
      'Elimina permanentemente un tipo de deterioro de configuración del sistema.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Tipo de deterioro eliminado exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID numérico del tipo de deterioro a eliminar',
    example: 1,
  })
  public async deleteTipoDeterioro(
    @Param('id', ParseIntPipe) idTipoDeterioro: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteTipoDeterioroConfig', idTipoDeterioro),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
