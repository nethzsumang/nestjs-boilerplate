import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from '../../config/database';
import throttlerConfig from '../../config/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [
        databaseConfig,
        throttlerConfig
      ],
      isGlobal: true
    }),
  ],
})
export class ConfigurationModule {}