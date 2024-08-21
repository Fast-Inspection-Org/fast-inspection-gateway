import { Module } from '@nestjs/common';

import { MailerController } from './mailer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NameUsersAuth } from 'src/utils/global';
import { envs } from 'src/utils/envs';

@Module({
  controllers: [MailerController],
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
export class MailerModule { }
