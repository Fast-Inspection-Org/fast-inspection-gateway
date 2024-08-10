import { Catch, RpcExceptionFilter, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class ExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    const rpcError = exception.getError()

    if (typeof rpcError === 'object' && 'status' in rpcError && 'message' in rpcError) {
      return response.status(typeof rpcError.status === 'string' ? parseInt(rpcError.status) : rpcError.status).json(rpcError)
    }

    response.status(401).json({
      status: 401,
      message: "Hola Mundo"
    })
  
  }
}