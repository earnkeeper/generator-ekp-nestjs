import { SdkModule } from '@earnkeeper/ekp-sdk-nestjs';
import { Module } from '@nestjs/common';
import { HelloWorldService } from './hello-world/hello-world.service';
import { UiProcessor } from './ui/ui.processor';

@Module({
  imports: [SdkModule],
  providers: [HelloWorldService, UiProcessor],
})
export class WorkerApp {}
