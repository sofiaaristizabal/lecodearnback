import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradoreDto } from './create-administradore.dto';

export class UpdateAdministradoreDto extends PartialType(CreateAdministradoreDto) {}
