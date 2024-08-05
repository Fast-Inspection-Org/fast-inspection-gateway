import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './utils/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.PORT);
}
bootstrap();
