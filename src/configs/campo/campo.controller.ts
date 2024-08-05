import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CampoDTO } from './dto/Campo.dto';
import { UpdateCampoDTO } from './dto/update-campo.dto';

@Controller('campo')
export class CampoController {
    constructor() { }

    @Get("getAllCampos")
    public async getAllCampos(@Query("nombre") nombre: String, @Query("importancia") importancia: String, @Query("idHerramienta") idHerramienta: String) {
        
    }

    @Post("createCampo")
    public async createCampo(@Body() campoDTO: CampoDTO) {
        
    }

    @Patch("updateCampo/:id")
    public async updateCampo(@Param("id", ParseIntPipe) idCampo: number, @Body() updateCampoDTO: UpdateCampoDTO) {
        
    }

    @Delete("deleteCampo/:id")
    public async deleteCampo(@Param("id", ParseIntPipe) idCampo: number) {
        
    }
}
