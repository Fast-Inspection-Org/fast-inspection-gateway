import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingControllerDto } from './create-building-controller.dto';

export class UpdateBuildingControllerDto extends PartialType(CreateBuildingControllerDto) {}
