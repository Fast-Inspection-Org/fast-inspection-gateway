import { Body, Controller, HttpException, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NameUsersAuth } from 'src/utils/global';
import { SendEmailDTO } from './dto/send-email.dto';
import { RpcError } from 'src/utils/interfaces-and-enums';


@Controller('mailer')
export class MailerController {
  constructor(@Inject(NameUsersAuth) private readonly usersAuthClient: ClientProxy) { }

  @Post("sendEmail")
  public async sendEmail(@Body() sentEmail: SendEmailDTO) {
    try {
      return await firstValueFrom(this.usersAuthClient.send('sendEmail', sentEmail))
    } catch (error) { // siempre en caso de error, este será un RpcExpection
      const rpcError: RpcError = error
      console.error(rpcError)
      throw new HttpException(rpcError.message, rpcError.status)
    }
  }

}
