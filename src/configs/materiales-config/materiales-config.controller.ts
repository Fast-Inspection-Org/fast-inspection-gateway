import { Body, Controller, Delete, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { MaterialConfigDTO } from './dto/material-config.dto';
import { UpdateMaterialConfigDTO } from './dto/update-material-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('materiales-config')
export class MaterialesConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }
    @Get("getAllMaterialesConfig/:idSubsistemaConfig")
    public async getAllMaterialesConfig(@Param("idSubsistemaConfig", ParseIntPipe) idSubsistemaConfig, @Query("nombre") nombre: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllMaterialesConfig', {
                idSubsistemaConfig: idSubsistemaConfig,
                nombre: nombre
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Post("createMaterialConfig")
    public async createMaterialConfig(@Body() materialConfig: MaterialConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createMaterialConfig', materialConfig))
        } catch (error) {  // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateMaterialConfig/:id/:idSubsistemaConfig")
    public async updateMaterialConfig(@Param("id", ParseIntPipe) idMaterialConfig: number, @Param("idSubsistemaConfig", ParseIntPipe) idSubsistemaConfig: number,
        @Body() updateMaterialConfigDTO: UpdateMaterialConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateMaterialConfig', {
                idMaterialConfig: idMaterialConfig,
                idSubsistemaConfig: idSubsistemaConfig,
                updateMaterialConfigDTO: updateMaterialConfigDTO
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Delete("deleteMaterialConfig/:id")
    public async deleteMaterialConfig(@Param("id", ParseIntPipe) idMaterialConfig: number) {
        try {
            return await firstValueFrom(this.configsClient.send('deleteMaterialConfig', idMaterialConfig))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
