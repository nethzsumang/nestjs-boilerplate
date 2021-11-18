import { CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './global_modules/config.module';
import { DatabaseConfigModule } from './global_modules/database.module';
import { ThrottlerConfigModule } from './global_modules/throttler.module';

@Module({
  imports: [
    ConfigurationModule,
    CacheModule.register(),
    HttpModule,
    ThrottlerConfigModule,
    DatabaseConfigModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
