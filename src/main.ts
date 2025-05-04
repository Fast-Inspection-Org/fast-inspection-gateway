import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './utils/envs';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExceptionFilter } from './utils/exeption-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración de CORS
  const corsOptions: CorsOptions = {
    origin: '*', // Permite solicitudes de cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  };

  // se indica el uso global del rpc expetion filter
  app.useGlobalFilters(new ExceptionFilter());

  app.enableCors(corsOptions);

  // Configuración de Open API para documentar el proyecto
  const config = new DocumentBuilder()
    .setTitle('Fast Inspection')
    .setDescription('The Fast Inspection API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .addTag('fast-inspection')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(envs.PORT));
}
bootstrap();
