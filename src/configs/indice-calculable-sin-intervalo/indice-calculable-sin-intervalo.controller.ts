import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Calculos } from 'src/utils/interfaces-and-enums';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { UpdateIndiceCalculableSinIntervaloDTO } from './dto/update-indice-calculable-sin-intervalo.dto';

@Controller('indice-calculable-sin-intervalo')
export class IndiceCalculableSinIntervaloController {

    constructor() { }

    @Get("getAllIndicesCalculablesSinIntervalos")
    public async getAllIndicesCalculablesSinIntervalos(@Query("nombre") nombre: String, @Query("calculo") calculo: Calculos, @Query("versionConfig") versionConfig: String) {
        
    }

    @Get("getIndiceCalculableSinIntervalo/:id")
    public async getIndiceCalculableSinIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        
    }

    @Post("createIndiceCalculableSinIntervalo")
    public async createIndiceCalculableSinIntervalo(@Body() indiceCalculableSinIntervaloDTO: IndiceCalculableDTO) {
        
    }

    @Patch("updateIndiceCalculableSinIntervalo/:id")
    public async updateIndiceCalculableSinIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable, @Body() updateIndiceCalculableSinIntervaloDTO: UpdateIndiceCalculableSinIntervaloDTO) {
        
    }
}
