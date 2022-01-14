import { DocumentDto } from '@earnkeeper/ekp-sdk-nestjs';

export interface HelloWorldDocument extends DocumentDto {
  readonly name: string;
  readonly value: string;
}
