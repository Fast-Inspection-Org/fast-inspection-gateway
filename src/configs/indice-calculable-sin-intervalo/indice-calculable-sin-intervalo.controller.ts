import { Body, Controller, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Calculos, RpcError } from 'src/utils/interfaces-and-enums';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { UpdateIndiceCalculableSinIntervaloDTO } from './dto/update-indice-calculable-sin-intervalo.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('indice-calculable-sin-intervalo')
export class IndiceCalculableSinIntervaloController {

    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllIndicesCalculablesSinIntervalos")
    public async getAllIndicesCalculablesSinIntervalos(@Query("nombre") nombre: String, @Query("calculo") calculo: Calculos, @Query("versionConfig") versionConfig: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllIndicesCalculablesSinIntervalos', {
                nombre: nombre,
                calculo: calculo,
                versionConfig: versionConfig
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Get("getIndiceCalculableSinIntervalo/:id")
    public async getIndiceCalculableSinIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable: number) {
        try {
            return await firstValueFrom(this.configsClient.send('getIndiceCalculableSinIntervalo', idIndiceCalculable))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Post("createIndiceCalculableSinIntervalo")
    public async createIndiceCalculableSinIntervalo(@Body() indiceCalculableSinIntervaloDTO: IndiceCalculableDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createIndiceCalculableSinIntervalo', indiceCalculableSinIntervaloDTO))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateIndiceCalculableSinIntervalo/:id")
    public async updateIndiceCalculableSinIntervalo(@Param("id", ParseIntPipe) idIndiceCalculable, @Body() updateIndiceCalculableSinIntervaloDTO: UpdateIndiceCalculableSinIntervaloDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateIndiceCalculableSinIntervalo', { idIndiceCalculable, updateIndiceCalculableSinIntervaloDTO }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
