import { Module } from '@nestjs/common';
import { UsersAuthController } from './users-auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/utils/envs';
import { jwtConstants, NameUsersAuth } from 'src/utils/global';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from './mailer/mailer.module';

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
    ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    MailerModule
  ]
})
export class UsersAuthModule { }
