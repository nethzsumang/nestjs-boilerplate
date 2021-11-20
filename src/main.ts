import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import * as csurf from 'csurf';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
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

  // for views
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
