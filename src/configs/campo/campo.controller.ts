import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CampoDTO } from './dto/Campo.dto';
import { UpdateCampoDTO } from './dto/update-campo.dto';
import { ClientProxy } from '@nestjs/microservices';
import { NameConfigsService } from 'src/utils/global';

@Controller('campo')
export class CampoController {
    constructor(@Inject(NameConfigsService) private readonly configsClient: ClientProxy) { }

    @Get("getAllCampos")
    public async getAllCampos(@Query("nombre") nombre: String, @Query("importancia") importancia: String, @Query("idHerramienta") idHerramienta: String) {
        return this.configsClient.send('getAllCampos', {
            nombre: nombre,
            importancia: importancia,
            idHerramienta
        })
    }

    @Post("createCampo")
    public async createCampo(@Body() campoDTO: CampoDTO) {
        return this.configsClient.send('createCampo', campoDTO)
    }

    @Patch("updateCampo/:id")
    public async updateCampo(@Param("id", ParseIntPipe) idCampo: number, @Body() updateCampoDTO: UpdateCampoDTO) {
        return this.configsClient.send('updateCampo', {
            idCampo: idCampo,
            updateCampoDTO: updateCampoDTO
        })
    }

    @Delete("deleteCampo/:id")
    public async deleteCampo(@Param("id", ParseIntPipe) idCampo: number) {
        return this.configsClient.send('deleteCampo', idCampo)
    }
}
