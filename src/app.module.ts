import { CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './common/config.module';
import { DatabaseConfigModule } from './common/database.module';
import { ThrottlerConfigModule } from './common/throttler.module';
import { LoggerModule } from './common/logger.module';

@Module({
  imports: [
    ConfigurationModule,
    CacheModule.register(),
    HttpModule,
    ThrottlerConfigModule,
    DatabaseConfigModule,
    LoggerModule,

    // application modules
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
