import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/auth/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private reflector: Reflector
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean  {
   
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const usuario = context.switchToHttp().getRequest().user;

    const hasRequiresRole = requiredRoles.some((role) => usuario.role == role);

    return hasRequiresRole;
  }
}
