import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import { StyleService } from './style.service';

@Injectable()
export class StyleSeed {
  constructor(
    @Inject(StyleService)
    private readonly styleService: StyleService,
  ) {}

  @Command({
    command: 'seed:styles',
    describe: 'Seed initial styles',
    autoExit: true,
  })
  async insertMany() {
    console.log('seed styles');
  }
}
