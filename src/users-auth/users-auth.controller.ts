import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Inject,
  HttpException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { RolEnum, RpcError } from 'src/utils/interfaces-and-enums';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ClientProxy } from '@nestjs/microservices';
import { NameUsersAuth } from 'src/utils/global';
import { LoginDTO } from './dto/login-dto';
import { firstValueFrom } from 'rxjs';
import { ActivacionDTO } from './dto/activacion.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ApiPaginatedResponse, apiResponses } from 'src/utils/api-responses';
import { UserSerializable } from './serializable/user.serializable';
import { LoginPayloadSerializable } from './serializable/login-payload.serializable';

@ApiTags('Gestión de Usuarios y Autenticación')
@Controller('users-auth')
export class UsersAuthController {
  constructor(
    @Inject(NameUsersAuth) private readonly usersAuthClient: ClientProxy,
  ) {}

  @Post('createUsuario')
  @ApiOperation({
    summary: 'Crear nuevo usuario',
    description:
      'Endpoint para crear un nuevo usuario en el sistema. Requiere permisos de administrador.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Usuario creado exitosamente. Retorna el objeto de usuario creado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: CreateUsuarioDto,
    description: 'Objeto con los datos del usuario a crear',
  })
  public async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('createUsuario', createUsuarioDto),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('activarCuentaUsuario')
  @ApiOperation({
    summary: 'Activar cuenta de usuario',
    description:
      'Endpoint para activar una cuenta de usuario mediante código de verificación.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Cuenta activada exitosamente. Retorna el objeto de usuario actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: ActivacionDTO,
    description: 'Objeto con el código de activación y email del usuario',
  })
  public async activarCuentaUsuario(@Body() activacionDTO: ActivacionDTO) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('activarCuentaUsuario', activacionDTO),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('verificarCodigoIdentidad')
  @ApiOperation({
    summary: 'Verificar código de identidad',
    description:
      'Endpoint para verificar un código de identidad enviado al usuario.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Código verificado exitosamente. Retorna estado de verificación.',
  })
  @ApiResponse(apiResponses[400])
  @ApiBody({
    type: ActivacionDTO,
    description: 'Objeto con el código de verificación y email del usuario',
  })
  public async verificarCodigoIdentidad(@Body() activacionDTO: ActivacionDTO) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('verificarCodigoIdentidad', activacionDTO),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getAllUsers/:idSolicitante')
  @ApiOperation({
    summary: 'Obtener todos los usuarios',
    description:
      'Endpoint para obtener todos los usuarios registrados en el sistema. Requiere permisos de administrador.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de usuarios recuperada exitosamente. Retorna array de objetos de usuario.',
    type: ApiPaginatedResponse(
      UserSerializable,
      'Representa la lista de usuarios obtenidos como respuesta de la solicitud',
    ),
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'idSolicitante',
    description: 'ID del usuario administrador que realiza la solicitud',
  })
  @ApiQuery({
    name: 'nombre',
    required: false,
    description: 'Filtra usuarios por nombre (búsqueda parcial)',
  })
  @ApiQuery({
    name: 'rol',
    required: false,
    description: 'Filtra usuarios por rol',
    enum: RolEnum,
  })
  public async findAll(
    @Param('idSolicitante') idSolicitante: String,
    @Query('nombre') nombre: string,
    @Query('rol') rol: RolEnum,
  ) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('getAllUsers', {
          idSolicitante: idSolicitante,
          nombreUsuario: nombre,
          rol: rol,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getUsuarioById/:id')
  @ApiOperation({
    summary: 'Obtener usuario por ID',
    description: 'Endpoint para obtener un usuario específico por su ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario encontrado. Retorna el objeto de usuario solicitado.',
    type: UserSerializable,
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    description: 'ID del usuario a buscar',
  })
  public async findOneById(@Param('id') id: string) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('getUsuarioById', id),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Get('getUsuario')
  @ApiOperation({
    summary: 'Buscar usuario',
    description:
      'Endpoint para buscar usuarios con múltiples criterios de filtrado.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Usuario(s) encontrado(s). Retorna objeto o array de usuarios.',
    type: UserSerializable,
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiQuery({
    name: 'idUsuario',
    required: false,
    description: 'ID del usuario a buscar',
  })
  @ApiQuery({
    name: 'nombreUsuario',
    required: false,
    description: 'Nombre del usuario a buscar (búsqueda parcial)',
  })
  @ApiQuery({
    name: 'rol',
    required: false,
    description: 'Rol del usuario a buscar',
    enum: RolEnum,
  })
  @ApiQuery({
    name: 'email',
    required: false,
    description: 'Email del usuario a buscar',
  })
  public async findOne(
    @Query('idUsuario') idUsuario: string,
    @Query('nombreUsuario') nombreUsuario: string,
    @Query('rol') rol: RolEnum,
    @Query('email') email: string,
  ) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('getUsuario', {
          _id: idUsuario,
          nombreUsuario: nombreUsuario,
          email: email,
          rol: rol,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Patch('updateUser/:id')
  @ApiOperation({
    summary: 'Actualizar usuario',
    description: 'Endpoint para actualizar los datos de un usuario existente.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Usuario actualizado exitosamente. Retorna el objeto de usuario actualizado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    description: 'ID del usuario a actualizar',
  })
  @ApiBody({
    type: UpdateUsuarioDto,
    description: 'Objeto con los campos a actualizar del usuario',
  })
  public async update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('updateUser', {
          id: id,
          updateUsuarioDto: updateUsuarioDto,
        }),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Delete('deleteUser/:id')
  @ApiOperation({
    summary: 'Eliminar usuario',
    description:
      'Endpoint para eliminar un usuario del sistema. Requiere permisos de administrador.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Usuario eliminado exitosamente. Retorna el objeto de usuario eliminado.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiParam({
    name: 'id',
    description: 'ID del usuario a eliminar',
  })
  public async delete(@Param('id') id: string) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('deleteUser', id));
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('login')
  @ApiOperation({
    summary: 'Iniciar sesión',
    description: 'Endpoint para autenticar usuarios y generar token de acceso.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Autenticación exitosa. Retorna token de acceso y datos del usuario.',
    type: LoginPayloadSerializable,
  })
  @ApiResponse(apiResponses[400])
  @ApiBody({
    type: LoginDTO,
    description: 'Credenciales de acceso (email y contraseña)',
  })
  public async login(@Body() loginDTO: LoginDTO) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('login', loginDTO));
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('registrer')
  @ApiOperation({
    summary: 'Registro de usuario',
    description: 'Endpoint para registro público de nuevos usuarios.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Usuario registrado exitosamente. Se envía código de activación al email.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    type: CreateUsuarioDto,
    description: 'Datos del nuevo usuario a registrar',
  })
  public async registrer(@Body() userDTO: CreateUsuarioDto) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('registrer', userDTO),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('cambiarContrasena')
  @ApiOperation({
    summary: 'Cambiar contraseña',
    description: 'Endpoint para cambiar la contraseña de un usuario.',
  })
  @ApiResponse({
    status: 200,
    description: 'Contraseña cambiada exitosamente.',
  })
  @ApiResponse(apiResponses[400])
  @ApiResponse(apiResponses[401])
  @ApiBody({
    description:
      'Objeto con ID de usuario, nueva contraseña y contraseña anterior (opcional para administradores)',
    examples: {
      normal: {
        value: {
          idUsuario: '12345',
          newContrasena: 'nuevaContraseñaSegura',
          contrasenaAnterior: 'contraseñaActual',
        },
      },
      admin: {
        value: {
          idUsuario: '12345',
          newContrasena: 'nuevaContraseñaSegura',
        },
      },
    },
  })
  public async cambiarContrasena(
    @Body()
    payload: {
      idUsuario: string;
      newContrasena: string;
      contrasenaAnterior?: string;
    },
  ) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send('cambiarContrasena', payload),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }

  @Post('enviarCodigoVerificacionIdentidad/:idUsuario')
  @ApiOperation({
    summary: 'Enviar código de verificación',
    description:
      'Endpoint para enviar un código de verificación al email del usuario.',
  })
  @ApiResponse({
    status: 200,
    description: 'Código enviado exitosamente.',
  })
  @ApiResponse(apiResponses[400])
  @ApiParam({
    name: 'idUsuario',
    description: 'ID del usuario al que se enviará el código',
  })
  public async enviarCodigoVerificacionIdentidad(
    @Param('idUsuario') idUsuario: string,
  ) {
    try {
      return await firstValueFrom(
        this.usersAuthClient.send(
          'enviarCodigoVerificacionIdentidad',
          idUsuario,
        ),
      );
    } catch (error) {
      const rpcError: RpcError = error;
      throw new HttpException(rpcError.message, rpcError.status);
    }
  }
}
