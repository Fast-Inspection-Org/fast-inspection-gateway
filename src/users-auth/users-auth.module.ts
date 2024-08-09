import { Module } from '@nestjs/common';
import { UsersAuthController } from './users-auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/utils/envs';
import { NameUsersAuth } from 'src/utils/global';

@Module({
  controllers: [UsersAuthController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: NameUsersAuth,
        transport: Transport.TCP,
        options: {
          host: envs.USERS_AUTH_HOST,
          port: parseInt(envs.USERS_AUTH_PORT)
        }
      }
    ])
  ]
})
export class UsersAuthModule { }
