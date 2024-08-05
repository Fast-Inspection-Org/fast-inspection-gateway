import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SubsistemaConfigDTO } from './dto/subsistema-config.dto';
import { UpdateSubsistemaConfigDTO } from './dto/update-subsistema-config.dto';

@Controller('subsistemas-config')
export class SubsistemasConfigController {
    constructor() { }
    @Get("getAllSubsistemasConfig/:idSistemaConfig")
    public async getAllSubsistemasConfig(@Param("idSistemaConfig", ParseIntPipe) idSistemaConfig, @Query("nombre") nombre: String) {
       
    }

    @Post("createSubsistemaConfig")
    public async createSubsistemaConfig(@Body() subistemaConfigDTO: SubsistemaConfigDTO) {
        
    }

    @Patch("updateSubsistemaConfig/:id/:idSistemaConfig")
    public async updateSubsistemaConfig(@Param("id", ParseIntPipe) idSubsistemaConfig: number, @Param("idSistemaConfig", ParseIntPipe) idSistemaConfig,
        @Body() updateSubsistemaConfigDTO: UpdateSubsistemaConfigDTO) {
       
    }

    @Delete("deleteSubsistemaConfig/:id")
    public async deleteSubsistemaConfig(@Param("id", ParseIntPipe) idSubsistemaConfig: number) {
       
    }
}
