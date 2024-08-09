import { Controller, Delete, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NameConfigsService } from 'src/utils/global';

@Controller('tipo-deterioros-config')
export class TipoDeteriorosConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Delete("deleteTipoDeterioroConfig/:id")
    public async deleteTipoDeterioro(@Param("id", ParseIntPipe) idTipoDeterioro: number) {
        return this.configsClient.send('deleteTipoDeterioroConfig', idTipoDeterioro)
    }
}
