import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SubsistemaConfigDTO } from './dto/subsistema-config.dto';
import { UpdateSubsistemaConfigDTO } from './dto/update-subsistema-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';

@Controller('subsistemas-config')
export class SubsistemasConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllSubsistemasConfig/:idSistemaConfig")
    public async getAllSubsistemasConfig(@Param("idSistemaConfig", ParseIntPipe) idSistemaConfig, @Query("nombre") nombre: String) {
        return this.configsClient.send('getAllSubsistemasConfig', {
            idSistemaConfig: idSistemaConfig,
            nombre: nombre
        })
    }

    @Post("createSubsistemaConfig")
    public async createSubsistemaConfig(@Body() subistemaConfigDTO: SubsistemaConfigDTO) {
        return this.configsClient.send('createSubsistemaConfig', subistemaConfigDTO)
    }

    @Patch("updateSubsistemaConfig/:id/:idSistemaConfig")
    public async updateSubsistemaConfig(@Param("id", ParseIntPipe) idSubsistemaConfig: number, @Param("idSistemaConfig", ParseIntPipe) idSistemaConfig,
        @Body() updateSubsistemaConfigDTO: UpdateSubsistemaConfigDTO) {
        return this.configsClient.send('updateSubsistemaConfig', {
            idSubsistemaConfig: idSubsistemaConfig,
            idSistemaConfig: idSistemaConfig,
            updateSubsistemaConfigDTO: updateSubsistemaConfigDTO
        })
    }

    @Delete("deleteSubsistemaConfig/:id")
    public async deleteSubsistemaConfig(@Param("id", ParseIntPipe) idSubsistemaConfig: number) {
        return this.configsClient.send('deleteSubsistemaConfig', idSubsistemaConfig)
    }
}
