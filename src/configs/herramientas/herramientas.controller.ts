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

@ApiTags('Herramientas de una Configuración')
@Controller('herramientas')
export class HerramientasController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Delete('deleteHerramienta/:id')
  @ApiOperation({
    summary: 'Eliminar herramienta',
    description: 'Elimina permanentemente una herramienta del sistema.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Herramienta eliminada exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID numérico de la herramienta a eliminar',
    example: 1,
  })
  public async deleteHerramienta(
    @Param('id', ParseIntPipe) idHerramienta: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteHerramienta', idHerramienta),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
