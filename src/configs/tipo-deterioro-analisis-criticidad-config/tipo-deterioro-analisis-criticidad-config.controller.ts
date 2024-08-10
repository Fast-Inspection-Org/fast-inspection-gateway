import { Body, Controller, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UpdateTipoDeterioroAnalisisCriticidadConfigDTO } from './dto/update-tipo-deterioro-analisis-criticidad-config.dt';
import { TipoDeterioroConfigDTO } from '../tipo-deterioros-config/dto/tipo-deterioro-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('tipo-deterioro-analisis-criticidad-config')
export class TipoDeterioroAnalisisCriticidadConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllTiposDeteriorosAnalisisCriticidadConfig/:idMaterialConfig")
    public async getAllTiposDeteriorosConfig(@Param("idMaterialConfig", ParseIntPipe) idMaterialConfig: number, @Query("nombre") nombre: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllTiposDeteriorosAnalisisCriticidadConfig', {
                idMaterialConfig: idMaterialConfig,
                nombre: nombre
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }

    }

    @Get("getTipoDeterioroAnalisisCriticidad/:id")
    public async getTipoDeterioroAnalisisCriticidad(@Param("id", ParseIntPipe) idTipoDeterioro: number) {
        try {
            return await firstValueFrom(this.configsClient.send('getTipoDeterioroAnalisisCriticidad', idTipoDeterioro))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Post("createTipoDeterioroAnalisisCriticidadConfig")
    public async createTipoDeterioroAnalisisCriticidadConfig(@Body() tipoDeterioroConfigDTO: TipoDeterioroConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createTipoDeterioroAnalisisCriticidadConfig', tipoDeterioroConfigDTO))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateTipoDeterioroAnalisisCriticidad/:id")
    public async updateTipoDeterioroAnalisisCriticidad(@Param("id", ParseIntPipe) idTipoDeterioro: number,
        @Body() updateTipoDeterioroAnalisisCriticidadDTO: UpdateTipoDeterioroAnalisisCriticidadConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateTipoDeterioroAnalisisCriticidad', {
                idTipoDeterioro: idTipoDeterioro,
                updateTipoDeterioroAnalisisCriticidadDTO: updateTipoDeterioroAnalisisCriticidadDTO
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
