import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SistemaConfigDTO } from './dto/sistema-config.dto';
import { UpdateSistemaConfigDTO } from './dto/update-sistema-config.dto';

@Controller('sistemas-config')
export class SistemasConfigController {
    constructor() { }

    @Post("createSistemaConfig")
    public async createSistemaConfig(@Body() sistemaConfigDTO: SistemaConfigDTO) {

       
    }

    @Patch("updateSistemaConfig/:id")
    public async updateSistemaConfig(@Param("id", ParseIntPipe) idSistemaConfig: number, @Body() updateSistemaConfigDTO: UpdateSistemaConfigDTO) {

    }

    @Get("getAllSistemasConfig")
    public async getAllSistemasConfig() {
       
    }


    @Get("getAllBelongConfig/:version")
    //@UseGuards(AuthGuard)
    public async getAllBelongConfig(@Param("version") versionConfig: number, @Query("nombre") nombre: String, @Query("nombreHerramienta") nombreHerramienta: String) {

    }

    @Delete("deleteSistemaConfig/:id")
    public async deleteSistemaConfig(@Param("id", ParseIntPipe) idSistema: number) {
       
    }

    @Get("getHerramientaSistemaMaterial/:idMaterial/:versionConfig")
    public async getHerramientaSistemaMaterial(@Param("idMaterial", ParseIntPipe) idMaterial: number, @Param("versionConfig", ParseIntPipe) versionConfig: number) {
        
    }
}
