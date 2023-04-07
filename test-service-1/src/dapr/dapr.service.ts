import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommunicationProtocolEnum, DaprClient, DaprServer } from '@dapr/dapr';

@Injectable()
export class DaprService {
  daprClient: DaprClient;
  private readonly logger = new Logger(DaprService.name);

  // daprServer: DaprServer;

  constructor(
    private readonly configService: ConfigService
  ) {
    const daprHost = this.configService.get<string>('third_party.dapr.host');
    const daprPort = this.configService.get<string>('third_party.dapr.port');

    this.logger.log(`Initializing DaprClient("${daprHost}", ${daprPort})`);
    this.daprClient = new DaprClient({daprHost, daprPort});

    // this.daprServer = new DaprServer({serverHost: daprHost, serverPort: daprPort, communicationProtocol: CommunicationProtocolEnum.HTTP});
  }
}