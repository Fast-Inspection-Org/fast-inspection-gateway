import { Controller, Delete, HttpException, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { NameConfigsService } from 'src/utils/global';
import { RpcError } from 'src/utils/interfaces-and-enums';

@ApiTags("indice-calculable")
@Controller('indice-calculable')
export class IndiceCalculableController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }
    @ApiOperation({ summary: 'Eliminar un indice calculable por su identificador' })
    @Delete("deleteIndiceCalculable/:id")
    public async deleteIndiceCalculable(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        try {
            return await firstValueFrom(this.configsClient.send('deleteIndiceCalculable', idIndiceCalculable))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
