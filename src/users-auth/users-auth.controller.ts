import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Inject, HttpException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { RolEnum, RpcError } from 'src/utils/interfaces-and-enums';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ClientProxy } from '@nestjs/microservices';
import { NameUsersAuth } from 'src/utils/global';
import { LoginDTO } from './dto/login-dto';
import { firstValueFrom } from 'rxjs';
import { ActivacionDTO } from './dto/activacion.dto';

@Controller('users-auth')
export class UsersAuthController {
  constructor(@Inject(NameUsersAuth) private readonly usersAuthClient: ClientProxy) { }

  @Post('createUsuario')
  public async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('createUsuario', createUsuarioDto))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Post('activarCuentaUsuario')
  public async activarCuentaUsuario(@Body() activacionDTO: ActivacionDTO) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('activarCuentaUsuario', activacionDTO))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Post('verificarCodigoIdentidad')
  public async verificarCodigoIdentidad(@Body() activacionDTO: ActivacionDTO) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('verificarCodigoIdentidad', activacionDTO))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Get("getAllUsers/:idSolicitante") // el parámetro "idSolicitante" representa el indentificador el usuario (administrador) que ejecutó la petición
  public async findAll(@Param("idSolicitante") idSolicitante: String, @Query("nombre") nombre: string, @Query("rol") rol: RolEnum) {

    try {
      return await firstValueFrom(this.usersAuthClient.send('getAllUsers', {
        idSolicitante: idSolicitante,
        nombreUsuario: nombre,
        rol: rol
      }))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Get('getUsuarioById/:id')
  public async findOneById(@Param('id') id: string) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('getUsuarioById', id))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Get('getUsuario')
  public async findOne(@Query("idUsuario") idUsuario: string, @Query("nombreUsuario") nombreUsuario: string, @Query("rol") rol: RolEnum, @Query("email") email: string) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('getUsuario', {
        _id: idUsuario,
        nombreUsuario: nombreUsuario,
        email: email,
        rol: rol
      }))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Patch('updateUser/:id')
  public async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('updateUser', {
        id: id,
        updateUsuarioDto: updateUsuarioDto
      }))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Delete('deleteUser/:id')
  public async delete(@Param('id') id: string) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('deleteUser', id))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  // Rutas de Autenticación
  @Post('login')
  public async login(@Body() loginDTO: LoginDTO) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('login', loginDTO))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Post('registrer')
  public async registrer(@Body() userDTO: CreateUsuarioDto) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('registrer', userDTO))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Post('cambiarContrasena')
  public async cambiarContrasena(@Body() payload: { idUsuario: string, newContrasena: string, contrasenaAnterior?: string }) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('cambiarContrasena', payload))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

  @Post('enviarCodigoVerificacionIdentidad/:idUsuario')
  public async enviarCodigoVerificacionIdentidad(@Param("idUsuario") idUsuario: string) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('enviarCodigoVerificacionIdentidad', idUsuario))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }
}
