import { Controller, Delete, HttpException, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NameConfigsService } from 'src/utils/global';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('herramientas')
export class HerramientasController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Delete("deleteHerramienta/:id")
    public async deleteHerramienta(@Param("id", ParseIntPipe) idHerramienta: number) {
        try {
            return await firstValueFrom(this.configsClient.send('deleteHerramienta', idHerramienta))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
