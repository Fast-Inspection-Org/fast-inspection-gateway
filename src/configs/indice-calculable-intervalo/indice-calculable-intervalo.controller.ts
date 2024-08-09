import { Body, Controller, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Calculos } from 'src/utils/interfaces-and-enums';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { UpdateIndiceCalculableIntervaloDTO } from './dto/update-indice-calculable-intervalo.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';

@Controller('indice-calculable-intervalo')
export class IndiceCalculableIntervaloController {

    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllIndicesCalculablesIntervalos")
    public async getAllIndicesCalculablesIntervalos(@Query("nombre") nombre: String, @Query("calculo") calculo: Calculos, @Query("versionConfig") versionConfig: String) {
        return this.configsClient.send('getAllIndicesCalculablesIntervalos', {
            nombre: nombre,
            calculo: calculo,
            versionConfig: versionConfig
        })
    }

    @Get("getIndiceCalculableIntervalo/:id")
    public async getIndiceCalculableIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        return this.configsClient.send('getIndiceCalculableIntervalo', idIndiceCalculable)
    }


    @Post("createIndiceCalculableIntervalo")
    public async createIndiceCalculableIntervalo(@Body() indiceCalculableIntervaloDTO: IndiceCalculableDTO) {
        return this.configsClient.send('createIndiceCalculableIntervalo', indiceCalculableIntervaloDTO)
    }

    @Patch("updateIndiceCalculableIntervalo/:id")
    public async updateIndiceCalculableIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable, @Body() updateIndiceCalculableIntervaloDTO: UpdateIndiceCalculableIntervaloDTO) {
        return this.configsClient.send('updateIndiceCalculableIntervalo', idIndiceCalculable)
    }
}
