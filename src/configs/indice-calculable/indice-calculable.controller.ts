import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';

@Controller('indice-calculable')
export class IndiceCalculableController {
    constructor() { }


    @Delete("deleteIndiceCalculable/:id")
    public async deleteIndiceCalculable(@Param("id", ParseIntPipe) idIndiceCalculable: number) {

    }
}
