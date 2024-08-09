import { Body, Controller, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Calculos } from 'src/utils/interfaces-and-enums';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { UpdateIndiceCalculableSinIntervaloDTO } from './dto/update-indice-calculable-sin-intervalo.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';

@Controller('indice-calculable-sin-intervalo')
export class IndiceCalculableSinIntervaloController {

    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllIndicesCalculablesSinIntervalos")
    public async getAllIndicesCalculablesSinIntervalos(@Query("nombre") nombre: String, @Query("calculo") calculo: Calculos, @Query("versionConfig") versionConfig: String) {
        return this.configsClient.send('getAllIndicesCalculablesSinIntervalos', {
            nombre: nombre,
            calculo: calculo,
            versionConfig: versionConfig
        })
    }

    @Get("getIndiceCalculableSinIntervalo/:id")
    public async getIndiceCalculableSinIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        return this.configsClient.send('getIndiceCalculableSinIntervalo', idIndiceCalculable)
    }

    @Post("createIndiceCalculableSinIntervalo")
    public async createIndiceCalculableSinIntervalo(@Body() indiceCalculableSinIntervaloDTO: IndiceCalculableDTO) {
        return this.configsClient.send('createIndiceCalculableSinIntervalo', indiceCalculableSinIntervaloDTO)
    }

    @Patch("updateIndiceCalculableSinIntervalo/:id")
    public async updateIndiceCalculableSinIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable, @Body() updateIndiceCalculableSinIntervaloDTO: UpdateIndiceCalculableSinIntervaloDTO) {
        return this.configsClient.send('updateIndiceCalculableSinIntervalo', { idIndiceCalculable, updateIndiceCalculableSinIntervaloDTO })
    }
}
