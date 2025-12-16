import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const origin = process.env.CORS_ORIGIN?.split(',').map(s => s.trim()).filter(Boolean);
  app.enableCors({
    origin: origin?.length ? origin : true,
    credentials: true
  });

  const port = Number(process.env.PORT || 4000);



  
  // ParsPack docs explicitly note binding host must be 0.0.0.0. :contentReference[oaicite:1]{index=1}
  await app.listen(port, '0.0.0.0');
}
bootstrap();
