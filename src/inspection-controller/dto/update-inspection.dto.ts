import { PartialType } from '@nestjs/mapped-types';
import { CreateInspectionDTO } from './create-inspection.dto';


export class UpdateInspectionDTO extends PartialType(CreateInspectionDTO) {}
