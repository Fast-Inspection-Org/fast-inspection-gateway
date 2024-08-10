import { Controller, Delete, HttpException, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NameConfigsService } from 'src/utils/global';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('indice-calculable')
export class IndiceCalculableController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

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
