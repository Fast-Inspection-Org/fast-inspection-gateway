import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UpdateTipoDeterioroAnalisisCriticidadConfigDTO } from './dto/update-tipo-deterioro-analisis-criticidad-config.dt';
import { TipoDeterioroConfigDTO } from '../tipo-deterioros-config/dto/tipo-deterioro-config.dto';

@Controller('tipo-deterioro-analisis-criticidad-config')
export class TipoDeterioroAnalisisCriticidadConfigController {
    constructor() { }

    @Get("getAllTiposDeteriorosAnalisisCriticidadConfig/:idMaterialConfig")
    public async getAllTiposDeteriorosConfig(@Param("idMaterialConfig", ParseIntPipe) idMaterialConfig: number, @Query("nombre") nombre: String) {

    }

    @Get("getTipoDeterioroAnalisisCriticidad/:id")
    public async getTipoDeterioroAnalisisCriticidad(@Param("id", ParseIntPipe) idTipoDeterioro: number) {

    }

    @Post("createTipoDeterioroAnalisisCriticidadConfig")
    public async createTipoDeterioroAnalisisCriticidadConfig(@Body() tipoDeterioroConfigDTO: TipoDeterioroConfigDTO) {
        
    }

    @Patch("updateTipoDeterioroAnalisisCriticidad/:id")
    public async updateTipoDeterioroAnalisisCriticidad(@Param("id", ParseIntPipe) idTipoDeterioro: number,
        @Body() updateTipoDeterioroAnalisisCriticidadDTO: UpdateTipoDeterioroAnalisisCriticidadConfigDTO) {
       
    }
}
