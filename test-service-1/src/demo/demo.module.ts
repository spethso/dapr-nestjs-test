import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DaprModule } from 'src/dapr/dapr.module';

@Module({
  imports: [DaprModule],
  controllers: [DemoController]
})
export class DemoModule {}
