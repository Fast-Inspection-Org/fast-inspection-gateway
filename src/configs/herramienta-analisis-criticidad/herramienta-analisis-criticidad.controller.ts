import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { HerramientaDTO } from '../herramientas/dto/herramienta.dto';
import { UpdateHerramientaAnalisisCriticidadDTO } from './dto/update-herramienta-analisis-criticidad.dto';

@Controller('herramienta-analisis-criticidad')
export class HerramientaAnalisisCriticidadController {


    constructor() { }

    @Post("createHerramientaAnalisisCriticidad")
    public async createHerramientaAnalisisCriticidad(@Body() herramientaDTO: HerramientaDTO) {

    }

    @Patch("updateHerramientaAnalisisCriticidad/:id")
    public async updateHerramientaAnalisisCriticidad(@Param("id") idHerramienta: number, @Body() updateHerramientaAnalisisCriticidadDTO: UpdateHerramientaAnalisisCriticidadDTO) {
        
    }


    @Get("getAllHerramientasAnalisisCritcidad")
    public async getAll(@Query("versionConfig") versionConfig: string, @Query("nombre") nombre: string) {

    }

    @Get("getHerramientaAnalisisCriticidad/:id")
    public async getHerramientaAnalisisCriticidad(@Param("id", ParseIntPipe) idHerramienta: number) {

    }


    @Get("getCamposHerramienta/:id")
    public async getCamposHerramienta(@Param("id", ParseIntPipe) idHerramienta: number) {
       
    }

    @Delete("deleteHerramientaAnalisisCritcidad/:id")
    public async deleteHerramientaAnalisisCritcidad(@Param() idHerramienta: number) {

    }
}
