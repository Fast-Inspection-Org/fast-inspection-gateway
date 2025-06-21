import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NameInspectionController } from 'src/utils/global';
import { RpcError } from 'src/utils/interfaces-and-enums';
import { CreateInspectionDTO } from './dto/create-inspection.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { ApiPaginatedResponse, apiResponses } from 'src/utils/api-responses';
import { InspectionSerializable } from './serializable/inspection.serializable';

@ApiTags('Inspecciones')
@Controller('inspections')
export class InspeccionController {
  constructor(
    @Inject(NameInspectionController)
    private readonly inspectionsClient: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear nueva inspección',
    description: 'Endpoint para registrar una nueva inspección en el sistema.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Inspección creada exitosamente. Retorna el objeto de inspección creado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: CreateInspectionDTO,
    description: 'Objeto con los datos de la inspección a crear',
  })
  public async createInspection(
    @Body() createInspectionDTO: CreateInspectionDTO,
  ) {
    try {
      return await firstValueFrom(
        this.inspectionsClient.send('create-inspection', createInspectionDTO),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener inspecciones',
    description:
      'Endpoint para recuperar inspecciones, con opción de filtrado por edificación.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de inspecciones recuperada exitosamente. Retorna array de objetos de inspección.',
    type: ApiPaginatedResponse(
      InspectionSerializable,
      'Representa la lista de inspecciones obtenidas como respuesta de la solicitud',
    ),
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiQuery({
    name: 'edificacionId',
    required: false,
    description: 'ID de la edificación para filtrar las inspecciones',
  })
  @ApiQuery({
    name: 'configId',
    required: false,
    description: 'ID de la configuración para filtrar las inspecciones',
  })
  public async findInspections(
    @Query('edificacionId') edificacionId: string,
    @Query('configId') configId: string,
  ) {
    try {
      return await firstValueFrom(
        this.inspectionsClient.send('find-inspections', {
          edificacionId,
          configId,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener la inspeccion',
    description: 'Endpoint para obtener toda la inspección solicitada.',
  })
  @ApiResponse({
    status: 200,
    description: 'Inspección solicitada.',
    type: InspectionSerializable,
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  public async findInspection(@Param('id') id: string) {
    try {
      return await firstValueFrom(
        this.inspectionsClient.send('find-inspection', id),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
