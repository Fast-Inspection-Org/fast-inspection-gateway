import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SistemaConfigDTO } from './dto/sistema-config.dto';
import { UpdateSistemaConfigDTO } from './dto/update-sistema-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';

@Controller('sistemas-config')
export class SistemasConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Post("createSistemaConfig")
    public async createSistemaConfig(@Body() sistemaConfigDTO: SistemaConfigDTO) {
        return this.configsClient.send('createSistemaConfig', sistemaConfigDTO)
    }

    @Patch("updateSistemaConfig/:id")
    public async updateSistemaConfig(@Param("id", ParseIntPipe) idSistemaConfig: number, @Body() updateSistemaConfigDTO: UpdateSistemaConfigDTO) {
        return this.configsClient.send('updateSistemaConfig', {
            idSistemaConfig: idSistemaConfig,
            updateSistemaConfigDTO: updateSistemaConfigDTO
        })
    }

    @Get("getAllSistemasConfig")
    public async getAllSistemasConfig() {
        return this.configsClient.send('getAllSistemasConfig', {})
    }


    @Get("getAllBelongConfig/:version")
    //@UseGuards(AuthGuard)
    public async getAllBelongConfig(@Param("version") versionConfig: number, @Query("nombre") nombre: String, @Query("nombreHerramienta") nombreHerramienta: String) {
        return this.configsClient.send('getAllBelongConfig', {
            versionConfig: versionConfig,
            nombre: nombre,
            nombreHerramienta
        })
    }

    @Delete("deleteSistemaConfig/:id")
    public async deleteSistemaConfig(@Param("id", ParseIntPipe) idSistema: number) {
        return this.configsClient.send('deleteSistemaConfig', idSistema)
    }

    @Get("getHerramientaSistemaMaterial/:idMaterial/:versionConfig")
    public async getHerramientaSistemaMaterial(@Param("idMaterial", ParseIntPipe) idMaterial: number, @Param("versionConfig", ParseIntPipe) versionConfig: number) {
        return this.configsClient.send('getHerramientaSistemaMaterial', {
            idMaterial: idMaterial,
            versionConfig: versionConfig
        })
    }
}
