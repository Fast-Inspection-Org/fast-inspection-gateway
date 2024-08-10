import { Body, Controller, Delete, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SubsistemaConfigDTO } from './dto/subsistema-config.dto';
import { UpdateSubsistemaConfigDTO } from './dto/update-subsistema-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';

@Controller('subsistemas-config')
export class SubsistemasConfigController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllSubsistemasConfig/:idSistemaConfig")
    public async getAllSubsistemasConfig(@Param("idSistemaConfig", ParseIntPipe) idSistemaConfig, @Query("nombre") nombre: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllSubsistemasConfig', {
                idSistemaConfig: idSistemaConfig,
                nombre: nombre
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Post("createSubsistemaConfig")
    public async createSubsistemaConfig(@Body() subistemaConfigDTO: SubsistemaConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createSubsistemaConfig', subistemaConfigDTO))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateSubsistemaConfig/:id/:idSistemaConfig")
    public async updateSubsistemaConfig(@Param("id", ParseIntPipe) idSubsistemaConfig: number, @Param("idSistemaConfig", ParseIntPipe) idSistemaConfig,
        @Body() updateSubsistemaConfigDTO: UpdateSubsistemaConfigDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateSubsistemaConfig', {
                idSubsistemaConfig: idSubsistemaConfig,
                idSistemaConfig: idSistemaConfig,
                updateSubsistemaConfigDTO: updateSubsistemaConfigDTO
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Delete("deleteSubsistemaConfig/:id")
    public async deleteSubsistemaConfig(@Param("id", ParseIntPipe) idSubsistemaConfig: number) {
        try {
            return await firstValueFrom(this.configsClient.send('deleteSubsistemaConfig', idSubsistemaConfig))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
