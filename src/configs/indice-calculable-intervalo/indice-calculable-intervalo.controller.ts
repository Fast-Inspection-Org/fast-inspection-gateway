import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Calculos } from 'src/utils/interfaces-and-enums';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { UpdateIndiceCalculableIntervaloDTO } from './dto/update-indice-calculable-intervalo.dto';

@Controller('indice-calculable-intervalo')
export class IndiceCalculableIntervaloController {

    constructor() { }

    @Get("getAllIndicesCalculablesIntervalos")
    public async getAllIndicesCalculablesIntervalos(@Query("nombre") nombre: String, @Query("calculo") calculo: Calculos, @Query("versionConfig") versionConfig: String) {
     
    }

    @Get("getIndiceCalculableIntervalo/:id")
    public async getIndiceCalculableIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        
    }


    @Post("createIndiceCalculableIntervalo")
    public async createIndiceCalculableIntervalo(@Body() indiceCalculableIntervaloDTO: IndiceCalculableDTO) {
       
    }

    @Patch("updateIndiceCalculableIntervalo/:id")
    public async updateIndiceCalculableIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable, @Body()updateIndiceCalculableIntervaloDTO: UpdateIndiceCalculableIntervaloDTO) {
        
    }
}
