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

@Controller('edifications-controller')
export class EdificationsControllerController {
  constructor(
    @Inject(NameEdificationsController)
    private readonly edificationsClient: ClientProxy,
  ) {}

  @Post('createEdificacion')
  async create(@Body() createEdificacioneDto: CreateEdificacionDto) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send(
          'createEdificacion',
          createEdificacioneDto,
        ),
      );
    } catch (error) {
      // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('findAllEdificaciones')
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
      // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('findOneEdificacion/:id')
  async findOne(@Param('id') id: number) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send('findOneEdificacion', id),
      );
    } catch (error) {
      // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateEdificacion/:id')
  async update(
    @Param('id') id: string,
    @Body() updateEdificacionDto: UpdateEdificacionDto,
  ) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send('updateEdificacion', updateEdificacionDto),
      );
    } catch (error) {
      // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('removeEdificacion/:id')
  async remove(@Param('id') id: number) {
    try {
      return await firstValueFrom(
        this.edificationsClient.send('removeEdificacion', id),
      );
    } catch (error) {
      // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
