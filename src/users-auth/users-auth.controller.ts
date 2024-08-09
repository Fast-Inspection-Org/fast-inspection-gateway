import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Inject } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { RolEnum } from 'src/utils/interfaces-and-enums';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ClientProxy } from '@nestjs/microservices';
import { NameUsersAuth } from 'src/utils/global';
import { LoginDTO } from './dto/login-dto';


@Controller('users-auth')
export class UsersAuthController {
  constructor(@Inject(NameUsersAuth) private readonly usersAuthClient: ClientProxy) { }

  @Post('createUsuario')
  public async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usersAuthClient.send('createUsuario', createUsuarioDto)
  }

  @Get("getAllUsers")
  public async findAll(@Query("nombre") nombre: string, @Query("rol") rol: RolEnum) {
    return this.usersAuthClient.send('getAllUsers', {
      nombre: nombre,
      rol: rol
    })
  }

  @Get('getUsuario/:id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersAuthClient.send('getUsuario', id)
  }

  @Patch('updateUser/:id')
  public async update(@Param('id', ParseIntPipe) id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usersAuthClient.send('updateUser', {
      id: id,
      updateUsuarioDto: updateUsuarioDto
    })
  }

  @Delete('deleteUser/:id')
  public async delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersAuthClient.send('deleteUser', id)
  }

  // Rutas de Autenticación
  @Post('login')
  public async login(@Body() loginDTO: LoginDTO) {
    return this.usersAuthClient.send('login', loginDTO)
  }

  @Post('registrer')
  public async registrer(@Body() userDTO: CreateUsuarioDto) {
    return this.usersAuthClient.send('registrer', userDTO)
  }

}
