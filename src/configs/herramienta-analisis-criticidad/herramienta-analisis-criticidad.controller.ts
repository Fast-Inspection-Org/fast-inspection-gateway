import { Body, Controller, Delete, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { HerramientaDTO } from '../herramientas/dto/herramienta.dto';
import { UpdateHerramientaAnalisisCriticidadDTO } from './dto/update-herramienta-analisis-criticidad.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('herramienta-analisis-criticidad')
export class HerramientaAnalisisCriticidadController {

    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Post("createHerramientaAnalisisCriticidad")
    public async createHerramientaAnalisisCriticidad(@Body() herramientaDTO: HerramientaDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createHerramientaAnalisisCriticidad', herramientaDTO))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateHerramientaAnalisisCriticidad/:id")
    public async updateHerramientaAnalisisCriticidad(@Param("id") idHerramienta: number, @Body() updateHerramientaAnalisisCriticidadDTO: UpdateHerramientaAnalisisCriticidadDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateHerramientaAnalisisCriticidad', {
                idHerramienta: idHerramienta,
                updateHerramientaAnalisisCriticidadDTO: updateHerramientaAnalisisCriticidadDTO
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }


    @Get("getAllHerramientasAnalisisCritcidad")
    public async getAll(@Query("versionConfig") versionConfig: String, @Query("nombre") nombre: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllHerramientasAnalisisCritcidad', {
                versionConfig: versionConfig,
                nombre: nombre
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Get("getHerramientaAnalisisCriticidad/:id")
    public async getHerramientaAnalisisCriticidad(@Param("id", ParseIntPipe) idHerramienta: number) {
        try {
            return await firstValueFrom(this.configsClient.send('getHerramientaAnalisisCriticidad', idHerramienta))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }


    @Get("getCamposHerramienta/:id")
    public async getCamposHerramienta(@Param("id", ParseIntPipe) idHerramienta: number) {
        try {
            return await firstValueFrom(this.configsClient.send('getCamposHerramienta', idHerramienta))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
