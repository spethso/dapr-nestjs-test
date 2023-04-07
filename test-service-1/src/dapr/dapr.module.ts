import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DaprService } from './dapr.service';

@Module({
    // List of imported modules
    imports: [ ConfigModule ],

    // List of controllers
    controllers: [ ],

    // Providers that will be instantiated by the Nest injector and that may be shared at least across this module
    providers: [ DaprService ],

    // which providers can be used in other modules?
    exports: [ DaprService ]
})
export class DaprModule {}