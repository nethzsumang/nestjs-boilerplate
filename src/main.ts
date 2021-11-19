import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  // for CSRF protection
  // app.use(session({
  //   secret: configService.get('app.key'),
  //   resave: false,
  //   saveUninitialized: false
  // }));
  // app.use(csurf());

  // for CORS
  // app.enableCors();
  await app.listen(3000);
}
bootstrap();
