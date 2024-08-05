import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';

@Controller('herramientas')
export class HerramientasController {
    constructor() { }

    @Delete("deleteHerramienta/:id")
    public async deleteHerramienta(@Param("id", ParseIntPipe) idHerramienta: number) {

    }
}
