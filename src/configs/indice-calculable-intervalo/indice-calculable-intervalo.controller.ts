import { Body, Controller, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Calculos, RpcError } from 'src/utils/interfaces-and-enums';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { UpdateIndiceCalculableIntervaloDTO } from './dto/update-indice-calculable-intervalo.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('indice-calculable-intervalo')
export class IndiceCalculableIntervaloController {

    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllIndicesCalculablesIntervalos")
    public async getAllIndicesCalculablesIntervalos(@Query("nombre") nombre: String, @Query("calculo") calculo: Calculos, @Query("versionConfig") versionConfig: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllIndicesCalculablesIntervalos', {
                nombre: nombre,
                calculo: calculo,
                versionConfig: versionConfig
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Get("getIndiceCalculableIntervalo/:id")
    public async getIndiceCalculableIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        try {
            return await firstValueFrom(this.configsClient.send('getIndiceCalculableIntervalo', idIndiceCalculable))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }

    }


    @Post("createIndiceCalculableIntervalo")
    public async createIndiceCalculableIntervalo(@Body() indiceCalculableIntervaloDTO: IndiceCalculableDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createIndiceCalculableIntervalo', indiceCalculableIntervaloDTO))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateIndiceCalculableIntervalo/:id")
    public async updateIndiceCalculableIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable, @Body() updateIndiceCalculableIntervaloDTO: UpdateIndiceCalculableIntervaloDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateIndiceCalculableIntervalo', idIndiceCalculable))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
