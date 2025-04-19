import { CreateUsuarioDto } from "./create-usuario.dto";
import { PartialType } from "@nestjs/mapped-types";
export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto){}