import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NameEdificationsController } from 'src/utils/global';
import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { firstValueFrom } from 'rxjs';
import { RpcError } from 'src/utils/interfaces-and-enums';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { apiResponses } from 'src/utils/api-responses';

@ApiTags('Edificaciones')
@Controller('edifications-controller')
export class EdificationsControllerController {
  constructor(
    @Inject(NameEdificationsController)
    private readonly edificationsClient: ClientProxy,
  ) {}

  @Post('createEdificacion')
  @ApiOperation({
    summary: 'Crear nueva edificación',
    description: 'Endpoint para registrar una nueva edificación en el sistema.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Edificación creada exitosamente. Retorna el objeto de edificación creado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: CreateEdificacionDto,
    description: 'Objeto con los datos de la edificación a crear',
  })
  async create(@Body() createEdificacioneDto: CreateEdificacionDto) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send(
          'createEdificacion',
          createEdificacioneDto,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('findAllEdificaciones')
  @ApiOperation({
    summary: 'Obtener todas las edificaciones',
    description:
      'Endpoint para listar todas las edificaciones con opción de filtrado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de edificaciones recuperada exitosamente. Retorna array de objetos.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra edificaciones por nombre (búsqueda parcial)',
  })
  @ApiQuery({
    name: 'direccion',
    required: false,
    description: 'Filtra edificaciones por dirección (búsqueda parcial)',
  })
  async findAll(
    @Query('nombre') nombre: string,
    @Query('direccion') direccion: string,
  ) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send('findAllEdificaciones', {
          nombre,
          direccion,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('findOneEdificacion/:id')
  @ApiOperation({
    summary: 'Obtener edificación por ID',
    description:
      'Endpoint para recuperar una edificación específica por su ID.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Edificación encontrada. Retorna el objeto de edificación solicitado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID numérico de la edificación a buscar',
  })
  async findOne(@Param('id') id: number) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send('findOneEdificacion', id),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateEdificacion/:id')
  @ApiOperation({
    summary: 'Actualizar edificación',
    description:
      'Endpoint para modificar los datos de una edificación existente.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Edificación actualizada exitosamente. Retorna el objeto actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    description: 'ID de la edificación a actualizar',
  })
  @ApiBody({
    type: UpdateEdificacionDto,
    description: 'Objeto con los campos a actualizar de la edificación',
  })
  async update(
    @Param('id') id: string,
    @Body() updateEdificacionDto: UpdateEdificacionDto,
  ) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send('updateEdificacion', {
          id,
          updateEdificacionDto,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('removeEdificacion/:id')
  @ApiOperation({
    summary: 'Eliminar edificación',
    description:
      'Endpoint para eliminar permanentemente una edificación del sistema.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Edificación eliminada exitosamente. Retorna el objeto eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID numérico de la edificación a eliminar',
  })
  async remove(@Param('id') id: number) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send('removeEdificacion', id),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
