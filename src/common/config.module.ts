import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../../config/app';
import databaseConfig from '../../config/database';
import throttlerConfig from '../../config/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [
        appConfig,
        databaseConfig,
        throttlerConfig
      ],
      isGlobal: true
    }),
  ],
})
export class ConfigurationModule {}