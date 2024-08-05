import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';

@Controller('tipo-deterioros-config')
export class TipoDeteriorosConfigController {
    constructor() { }

    @Delete("deleteTipoDeterioroConfig/:id")
    public async deleteTipoDeterioro(@Param("id", ParseIntPipe) idTipoDeterioro: number) {
      
    }
}
