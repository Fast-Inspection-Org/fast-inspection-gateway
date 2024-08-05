import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { MaterialConfigDTO } from './dto/material-config.dto';
import { UpdateMaterialConfigDTO } from './dto/update-material-config.dto';

@Controller('materiales-config')
export class MaterialesConfigController {
    constructor() { }
    @Get("getAllMaterialesConfig/:idSubsistemaConfig")
    public async getAllMaterialesConfig(@Param("idSubsistemaConfig", ParseIntPipe) idSubsistemaConfig, @Query("nombre") nombre: String) {

    }

    @Post("createMaterialConfig")
    public async createMaterialConfig(@Body() materialConfig: MaterialConfigDTO) {
       
    }

    @Patch("updateMaterialConfig/:id/:idSubsistemaConfig")
    public async updateMaterialConfig(@Param("id", ParseIntPipe) idMaterialConfig: number, @Param("idSubsistemaConfig", ParseIntPipe) idSubsistemaConfig: number,
        @Body() updateMaterialConfigDTO: UpdateMaterialConfigDTO) {
        
    }

    @Delete("deleteMaterialConfig/:id")
    public async deleteMaterialConfig(@Param("id", ParseIntPipe) idMaterialConfig: number) {
       
    }
}
