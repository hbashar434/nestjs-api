import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new ResponseInterceptor());

  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT ?? 3000);

  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();
