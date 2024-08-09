import { Controller, Delete, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NameConfigsService } from 'src/utils/global';

@Controller('herramientas')
export class HerramientasController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Delete("deleteHerramienta/:id")
    public async deleteHerramienta(@Param("id", ParseIntPipe) idHerramienta: number) {
        return this.configsClient.send('deleteHerramienta', idHerramienta)
    }
}
