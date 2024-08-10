import { Controller, Delete, HttpException, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NameConfigsService } from 'src/utils/global';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('tipo-deterioros-config')
export class TipoDeteriorosConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Delete("deleteTipoDeterioroConfig/:id")
    public async deleteTipoDeterioro(@Param("id", ParseIntPipe) idTipoDeterioro: number) {
        try {
            return await firstValueFrom(this.configsClient.send('deleteTipoDeterioroConfig', idTipoDeterioro))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
