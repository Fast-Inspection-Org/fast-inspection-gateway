import { Body, Controller, Delete, Get, HttpException, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UpdateCampoDTO } from './dto/update-campo.dto';
import { ClientProxy } from '@nestjs/microservices';
import { NameConfigsService } from 'src/utils/global';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';
import { CampoDTO } from './dto/campo.dto';



@Controller('campo')
export class CampoController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllCampos")
    public async getAllCampos(@Query("nombre") nombre: String, @Query("importancia") importancia: String, @Query("idHerramienta") idHerramienta: String) {
        try {
            return await firstValueFrom(this.configsClient.send('getAllCampos', {
                nombre: nombre,
                importancia: importancia,
                idHerramienta
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Post("createCampo")
    public async createCampo(@Body() campoDTO: CampoDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('createCampo', campoDTO))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Patch("updateCampo/:id")
    public async updateCampo(@Param("id", ParseIntPipe) idCampo: number, @Body() updateCampoDTO: UpdateCampoDTO) {
        try {
            return await firstValueFrom(this.configsClient.send('updateCampo', {
                idCampo: idCampo,
                updateCampoDTO: updateCampoDTO
            }))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }

    @Delete("deleteCampo/:id")
    public async deleteCampo(@Param("id", ParseIntPipe) idCampo: number) {
        try {
            return await firstValueFrom(this.configsClient.send('deleteCampo', idCampo))
        } catch (error) { // siempre en caso de error, este será un RpcExpection
            const rpcError: RpcError = error
            throw new HttpException(rpcError.message, rpcError.status)
        }
    }
}
