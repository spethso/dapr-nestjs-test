import { Controller, Get, HttpCode, Req, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DaprService } from '../dapr/dapr.service';

@Controller('demo')
@ApiTags('demo') // Attaches controller to a specific tag - https://docs.nestjs.com/websites/swagger#tags
export class DemoController {
  private readonly logger = new Logger(DemoController.name);

  constructor(
    private readonly daprService: DaprService,
  ) { }

  @Get('/hello')
  @HttpCode(200)
  async demo(@Req() req): Promise<void> {
    console.log("Hello World!");
    await this.daprService.daprClient.pubsub.publish("my-pubsub-name", "topic-a", JSON.stringify({ hello: "world" }));
    // const data = await this.daprService.daprServer.pubsub.subscribe("my-pubsub", "mytopic", (data, headers) => { return data});
    // console.log(data);
  }
}