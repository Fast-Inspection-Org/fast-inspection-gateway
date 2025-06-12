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
import { MaterialConfigDTO } from './dto/material-config.dto';
import { UpdateMaterialConfigDTO } from './dto/update-material-config.dto';
import { NameConfigsService } from 'src/utils/global';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ApiPaginatedResponse, apiResponses } from 'src/utils/api-responses';
import { MaterialConfigSerializable } from './serializable/material-config.serializable';

@ApiTags('Materiales de una Configuración')
@Controller('materiales-config')
export class MaterialesConfigController {
  constructor(
    @Inject(NameConfigsService) private readonly configsClient: ClientProxy,
  ) {}

  @Get('getAllMaterialesConfig/:idSubsistemaConfig')
  @ApiOperation({
    summary: 'Obtener todos los materiales de configuración',
    description:
      'Recupera todos los materiales de configuración asociados a un subsistema específico, con opción de filtrado por nombre.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de materiales de configuración recuperada exitosamente. Retorna un array de objetos.',
    type: ApiPaginatedResponse(
      MaterialConfigSerializable,
      'Representa la lista de materiales obtenidos como respuesta de la solicitud',
    ),
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'idSubsistemaConfig',
    type: Number,
    description:
      'ID del subsistema de configuración al que pertenecen los materiales',
  })
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra materiales por nombre (búsqueda parcial)',
  })
  public async getAllMaterialesConfig(
    @Param('idSubsistemaConfig', ParseIntPipe) idSubsistemaConfig,
    @Query('nombre') nombre: String,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('getAllMaterialesConfig', {
          idSubsistemaConfig: idSubsistemaConfig,
          nombre: nombre,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('createMaterialConfig')
  @ApiOperation({
    summary: 'Crear nuevo material de configuración',
    description: 'Registra un nuevo material de configuración en el sistema.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Material de configuración creado exitosamente. Retorna el objeto creado con su ID asignado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: MaterialConfigDTO,
    description: 'Objeto con los datos del material de configuración a crear',
  })
  public async createMaterialConfig(@Body() materialConfig: MaterialConfigDTO) {
    try {
      return await firstValueFrom(
        this.configsClient.send('createMaterialConfig', materialConfig),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateMaterialConfig/:id')
  @ApiOperation({
    summary: 'Actualizar material de configuración',
    description:
      'Modifica los datos de un material de configuración existente.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Material de configuración actualizado exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del material de configuración a actualizar',
  })
  @ApiBody({
    type: UpdateMaterialConfigDTO,
    description:
      'Objeto con los campos a actualizar del material de configuración',
  })
  public async updateMaterialConfig(
    @Param('id', ParseIntPipe) idMaterialConfig: number,
    @Body() updateMaterialConfigDTO: UpdateMaterialConfigDTO,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('updateMaterialConfig', {
          idMaterialConfig: idMaterialConfig,
          updateMaterialConfigDTO: updateMaterialConfigDTO,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('deleteMaterialConfig/:id')
  @ApiOperation({
    summary: 'Eliminar material de configuración',
    description:
      'Elimina permanentemente un material de configuración del sistema.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Material de configuración eliminado exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del material de configuración a eliminar',
  })
  public async deleteMaterialConfig(
    @Param('id', ParseIntPipe) idMaterialConfig: number,
  ) {
    try {
      return await firstValueFrom(
        this.configsClient.send('deleteMaterialConfig', idMaterialConfig),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
