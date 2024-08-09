import { Controller, Delete, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NameConfigsService } from 'src/utils/global';

@Controller('indice-calculable')
export class IndiceCalculableController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Delete("deleteIndiceCalculable/:id")
    public async deleteIndiceCalculable(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        return this.configsClient.send('deleteIndiceCalculable', idIndiceCalculable)
    }
}
