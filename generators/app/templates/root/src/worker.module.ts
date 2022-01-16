import { GlobalModule } from '@earnkeeper/ekp-sdk-nestjs';
import { BullModule, BullModuleOptions } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { HelloWorldProcessor } from './hello-world/hello-world.processor';
import { UiProcessor } from './ui/ui.processor';
import { QUEUE_NAMES } from './util/queue.names';

@Module({
  imports: [
    GlobalModule,
    BullModule.registerQueue(
      ...QUEUE_NAMES.map((name: string) => <BullModuleOptions>{ name }),
    ),
  ],
  providers: [HelloWorldProcessor, UiProcessor],
})
export class WorkerModule {}
