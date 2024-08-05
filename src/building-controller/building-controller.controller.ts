import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateBuildingControllerDto } from './dto/create-building-controller.dto';
import { UpdateBuildingControllerDto } from './dto/update-building-controller.dto';

@Controller('building-controller')
export class BuildingControllerController {
  constructor() {}

  @Post()
  create(@Body() createBuildingControllerDto: CreateBuildingControllerDto) {
    
  }

  @Get()
  findAll() {

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingControllerDto: UpdateBuildingControllerDto) {

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    
  }
}
