import { Body, Controller, Delete, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SistemaConfigDTO } from './dto/sistema-config.dto';
import { UpdateSistemaConfigDTO } from './dto/update-sistema-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('sistemas-config')
export class SistemasConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Post("createSistemaConfig")
    public async createSistemaConfig(@Body() sistemaConfigDTO: SistemaConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createSistemaConfig', sistemaConfigDTO))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateSistemaConfig/:id")
    public async updateSistemaConfig(@Param("id", ParseIntPipe) idSistemaConfig: number, @Body() updateSistemaConfigDTO: UpdateSistemaConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateSistemaConfig', {
                idSistemaConfig: idSistemaConfig,
                updateSistemaConfigDTO: updateSistemaConfigDTO
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Get("getAllSistemasConfig")
    public async getAllSistemasConfig() {
        try {
            return await firstValueFrom(this.configsClient.send('getAllSistemasConfig', {}))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }


    @Get("getAllBelongConfig/:version")
    //@UseGuards(AuthGuard)
    public async getAllBelongConfig(@Param("version") versionConfig: number, @Query("nombre") nombre: String, @Query("nombreHerramienta") nombreHerramienta: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllBelongConfig', {
                versionConfig: versionConfig,
                nombre: nombre,
                nombreHerramienta
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Delete("deleteSistemaConfig/:id")
    public async deleteSistemaConfig(@Param("id", ParseIntPipe) idSistema: number) {
        try {
            return await firstValueFrom(this.configsClient.send('deleteSistemaConfig', idSistema))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Get("getHerramientaSistemaMaterial/:idMaterial/:versionConfig")
    public async getHerramientaSistemaMaterial(@Param("idMaterial", ParseIntPipe) idMaterial: number, @Param("versionConfig", ParseIntPipe) versionConfig: number) {
        try {
            return await firstValueFrom(this.configsClient.send('getHerramientaSistemaMaterial', {
                idMaterial: idMaterial,
                versionConfig: versionConfig
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
