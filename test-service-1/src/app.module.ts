import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaprModule } from './dapr/dapr.module';
import configuration from '../config/config';
import { ConfigModule } from '@nestjs/config';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
  }),
  DaprModule,
  DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
