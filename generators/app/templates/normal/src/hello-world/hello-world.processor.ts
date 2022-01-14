import {
  AbstractProcessor,
  BaseContext,
  MilestoneConfig,
  milestoneConfig,
} from '@earnkeeper/ekp-sdk-nestjs';
import { Processor } from '@nestjs/bull';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs';
import {
  HELLO_WORLD_DOCUMENT,
  HELLO_WORLD_MILESTONES,
} from '../util/collectionNames';
import { HELLO_WORLD_QUEUE } from '../util/queue.names';
import { HelloWorldDocument } from './hello-world.document';

@Processor(HELLO_WORLD_QUEUE)
export class HelloWorldProcessor extends AbstractProcessor<Context> {
  constructor() {
    super();
  }

  pipe(source: Observable<BaseContext>): Observable<BaseContext> {
    return source.pipe(
      this.emitMilestones(),
      this.mapDocuments(),
      this.emitDocuments(),
      this.removeMilestones(),
    );
  }

  protected getMilestoneConfig(): MilestoneConfig<Context> {
    return milestoneConfig<Context>(
      HELLO_WORLD_MILESTONES,
      context => !context.documents?.length,
      {
        items: context => context.documents,
        progressing: () => 'Generating hellow world table',
        complete: records => `Table generated with ${records.length} records`,
      },
    );
  }

  private mapDocuments() {
    return Rx.map((context: Context) => {
      return {
        ...context,
        documents: [
          {
            id: 'hello-world-1',
            name: 'Hello',
            value: 'World',
          },
        ],
      };
    });
  }

  private emitDocuments() {
    return Rx.tap((context: Context) => {
      const addLayers = [
        {
          id: HELLO_WORLD_DOCUMENT,
          collectionName: HELLO_WORLD_DOCUMENT,
          set: context.documents,
        },
      ];
      this.eventService.addLayers(context.clientId, addLayers);
    });
  }
}

interface Context extends BaseContext {
  readonly documents?: HelloWorldDocument[];
}
