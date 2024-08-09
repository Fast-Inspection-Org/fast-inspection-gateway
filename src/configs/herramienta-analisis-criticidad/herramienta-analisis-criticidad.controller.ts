import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { HerramientaDTO } from '../herramientas/dto/herramienta.dto';
import { UpdateHerramientaAnalisisCriticidadDTO } from './dto/update-herramienta-analisis-criticidad.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';

@Controller('herramienta-analisis-criticidad')
export class HerramientaAnalisisCriticidadController {

    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Post("createHerramientaAnalisisCriticidad")
    public async createHerramientaAnalisisCriticidad(@Body() herramientaDTO: HerramientaDTO) {
        return this.configsClient.send('createHerramientaAnalisisCriticidad', herramientaDTO)
    }

    @Patch("updateHerramientaAnalisisCriticidad/:id")
    public async updateHerramientaAnalisisCriticidad(@Param("id") idHerramienta: number, @Body() updateHerramientaAnalisisCriticidadDTO: UpdateHerramientaAnalisisCriticidadDTO) {
        return this.configsClient.send('updateHerramientaAnalisisCriticidad', {
            idHerramienta: idHerramienta,
            updateHerramientaAnalisisCriticidadDTO: updateHerramientaAnalisisCriticidadDTO
        })
    }


    @Get("getAllHerramientasAnalisisCritcidad")
    public async getAll(@Query("versionConfig") versionConfig: String, @Query("nombre") nombre: String) {
        return this.configsClient.send('getAllHerramientasAnalisisCritcidad', {
            versionConfig: versionConfig,
            nombre: nombre
        })
    }

    @Get("getHerramientaAnalisisCriticidad/:id")
    public async getHerramientaAnalisisCriticidad(@Param("id", ParseIntPipe) idHerramienta: number) {
        return this.configsClient.send('getHerramientaAnalisisCriticidad', idHerramienta)
    }


    @Get("getCamposHerramienta/:id")
    public async getCamposHerramienta(@Param("id", ParseIntPipe) idHerramienta: number) {
        return this.configsClient.send('getCamposHerramienta', idHerramienta)
    }
}
