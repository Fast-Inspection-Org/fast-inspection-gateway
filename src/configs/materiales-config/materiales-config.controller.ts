import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { MaterialConfigDTO } from './dto/material-config.dto';
import { UpdateMaterialConfigDTO } from './dto/update-material-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';

@Controller('materiales-config')
export class MaterialesConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }
    @Get("getAllMaterialesConfig/:idSubsistemaConfig")
    public async getAllMaterialesConfig(@Param("idSubsistemaConfig", ParseIntPipe) idSubsistemaConfig, @Query("nombre") nombre: String) {
        return this.configsClient.send('getAllMaterialesConfig', {
            idSubsistemaConfig: idSubsistemaConfig,
            nombre: nombre
        })
    }

    @Post("createMaterialConfig")
    public async createMaterialConfig(@Body() materialConfig: MaterialConfigDTO) {
        return this.configsClient.send('createMaterialConfig', materialConfig)
    }

    @Patch("updateMaterialConfig/:id/:idSubsistemaConfig")
    public async updateMaterialConfig(@Param("id", ParseIntPipe) idMaterialConfig: number, @Param("idSubsistemaConfig", ParseIntPipe) idSubsistemaConfig: number,
        @Body() updateMaterialConfigDTO: UpdateMaterialConfigDTO) {
        return this.configsClient.send('updateMaterialConfig', {
            idMaterialConfig: idMaterialConfig,
            idSubsistemaConfig: idSubsistemaConfig,
            updateMaterialConfigDTO: updateMaterialConfigDTO
        })
    }

    @Delete("deleteMaterialConfig/:id")
    public async deleteMaterialConfig(@Param("id", ParseIntPipe) idMaterialConfig: number) {
        return this.configsClient.send('deleteMaterialConfig', idMaterialConfig)
    }
}
