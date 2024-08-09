import { Body, Controller, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UpdateTipoDeterioroAnalisisCriticidadConfigDTO } from './dto/update-tipo-deterioro-analisis-criticidad-config.dt';
import { TipoDeterioroConfigDTO } from '../tipo-deterioros-config/dto/tipo-deterioro-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';

@Controller('tipo-deterioro-analisis-criticidad-config')
export class TipoDeterioroAnalisisCriticidadConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllTiposDeteriorosAnalisisCriticidadConfig/:idMaterialConfig")
    public async getAllTiposDeteriorosConfig(@Param("idMaterialConfig", ParseIntPipe) idMaterialConfig: number, @Query("nombre") nombre: String) {
        return this.configsClient.send('getAllTiposDeteriorosAnalisisCriticidadConfig', {
            idMaterialConfig: idMaterialConfig,
            nombre: nombre
        })
    }

    @Get("getTipoDeterioroAnalisisCriticidad/:id")
    public async getTipoDeterioroAnalisisCriticidad(@Param("id", ParseIntPipe) idTipoDeterioro: number) {
        return this.configsClient.send('getTipoDeterioroAnalisisCriticidad', idTipoDeterioro)
    }

    @Post("createTipoDeterioroAnalisisCriticidadConfig")
    public async createTipoDeterioroAnalisisCriticidadConfig(@Body() tipoDeterioroConfigDTO: TipoDeterioroConfigDTO) {
        return this.configsClient.send('createTipoDeterioroAnalisisCriticidadConfig', tipoDeterioroConfigDTO)
    }

    @Patch("updateTipoDeterioroAnalisisCriticidad/:id")
    public async updateTipoDeterioroAnalisisCriticidad(@Param("id", ParseIntPipe) idTipoDeterioro: number,
        @Body() updateTipoDeterioroAnalisisCriticidadDTO: UpdateTipoDeterioroAnalisisCriticidadConfigDTO) {
        return this.configsClient.send('updateTipoDeterioroAnalisisCriticidad', {
            idTipoDeterioro: idTipoDeterioro,
            updateTipoDeterioroAnalisisCriticidadDTO: updateTipoDeterioroAnalisisCriticidadDTO
        })
    }
}
