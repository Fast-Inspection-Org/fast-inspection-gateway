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

@ApiTags('Indices Calculables de una Configuración')
@Controller('indice-calculable')
export class IndiceCalculableController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Delete('deleteIndiceCalculable/:id')
  @ApiOperation({
    summary: 'Eliminar índice calculable',
    description:
      'Elimina permanentemente un índice calculable del sistema usando su ID único.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Índice calculable eliminado exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID numérico del índice calculable a eliminar',
    example: 5,
  })
  public async deleteIndiceCalculable(
    @Param('id', ParseIntPipe) idIndiceCalculable: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteIndiceCalculable', idIndiceCalculable),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
