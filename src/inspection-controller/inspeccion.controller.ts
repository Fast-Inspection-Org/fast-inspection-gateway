import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NameInspectionController } from 'src/utils/global';
import { RpcError } from 'src/utils/interfaces-and-enums';
import { CreateInspectionDTO } from './dto/create-inspection.dto';

@Controller('inspections')
export class InspeccionController {
  constructor(
    @Inject(NameInspectionController)
    private readonly inspectionsClient: ClientProxy,
  ) {}
  @Post()
  public async createInspection(
    @Body() createInspectionDTO: CreateInspectionDTO,
  ) {
    try {
      return await firstValueFrom(
        this.inspectionsClient.send('create-inspection', createInspectionDTO),
      );
    } catch (error) {
      // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get()
  public async findInspections(@Query('edificacionId') edificacionId: string) {
    try {
      return await firstValueFrom(
        this.inspectionsClient.send('find-inspections', { edificacionId }),
      );
    } catch (error) {
      // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
