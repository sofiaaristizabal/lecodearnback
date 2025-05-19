import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth-jwtPayload';
@Injectable()
export class AuthService {

    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ){}

    async validateUser(email:string, password:string){
    
        const usuario = await this.usuarioService.findByEmail(email)

        if(!usuario){
            throw new UnauthorizedException("Usuario no encontrado")
        }

        const isPasswordMatch = await bcrypt.compareSync(password, usuario.password);

        if(!isPasswordMatch){
            throw new UnauthorizedException('Invalid credentials')
        }

        return {id:usuario.id}
    }

    login(userId: string){
        const payload: AuthJwtPayload = {sub: userId};
        return this.jwtService.sign(payload)
    }
}
