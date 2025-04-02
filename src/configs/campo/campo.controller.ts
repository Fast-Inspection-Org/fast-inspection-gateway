import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateCampoDTO } from './dto/update-campo.dto';
import { ClientProxy } from '@nestjs/microservices';
import { NameConfigsService } from 'src/utils/global';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';
import { CampoDTO } from './dto/campo.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { apiResponses } from 'src/utils/api-responses';

@ApiTags('campos')
@Controller('campo')
export class CampoController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Get('getAllCampos')
  @ApiOperation({
    summary: 'Obtener todos los campos',
    description:
      'Recupera todos los campos registrados en el sistema con opción de filtrado por parámetros.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de campos recuperada exitosamente. Retorna un array de objetos de campo.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra campos por nombre (búsqueda parcial)',
  })
  @ApiQuery({
    name: 'importancia',
    required: false,
    description: 'Filtra campos por nivel de importancia',
  })
  @ApiQuery({
    name: 'idHerramienta',
    required: false,
    description: 'Filtra campos por ID de herramienta asociada',
  })
  public async getAllCampos(
    @Query('nombre') nombre: String,
    @Query('importancia') importancia: String,
    @Query('idHerramienta') idHerramienta: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllCampos', {
          nombre: nombre,
          importancia: importancia,
          idHerramienta,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createCampo')
  @ApiOperation({
    summary: 'Crear nuevo campo',
    description:
      'Registra un nuevo campo en el sistema con los parámetros proporcionados.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Campo creado exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: CampoDTO,
    description: 'Objeto con los datos del campo a crear',
  })
  public async createCampo(@Body() campoDTO: CampoDTO) {
    try {
      return await firstValueFrom(
        this.configsClient.send('createCampo', campoDTO),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateCampo/:id')
  @ApiOperation({
    summary: 'Actualizar campo existente',
    description: 'Modifica los datos de un campo existente en el sistema.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Campo actualizado exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del campo a actualizar',
  })
  @ApiBody({
    type: UpdateCampoDTO,
    description: 'Objeto con los campos a actualizar',
  })
  public async updateCampo(
    @Param('id', ParseIntPipe) idCampo: number,
    @Body() updateCampoDTO: UpdateCampoDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateCampo', {
          idCampo: idCampo,
          updateCampoDTO: updateCampoDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('deleteCampo/:id')
  @ApiOperation({
    summary: 'Eliminar campo',
    description: 'Elimina permanentemente un campo del sistema.',
  })
  @ApiResponse({
    status: 200,
    description: 'Campo eliminado exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del campo a eliminar',
  })
  public async deleteCampo(@Param('id', ParseIntPipe) idCampo: number) {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteCampo', idCampo),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
