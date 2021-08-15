import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import grains from '../../seed-data/Fermentables/grains';
import { FermentableService } from './fermentable.service';

@Injectable()
export class FermentableSeed {
  constructor(
    @Inject(FermentableService)
    private readonly fermentableService: FermentableService,
  ) {}

  @Command({
    command: 'seed:fermentables',
    describe: 'Seed initial fermentables',
    autoExit: true,
  })
  async insertMany() {
    const isDbEmpty = (await this.fermentableService.find()).total === 0;

    if (isDbEmpty) {
      const seededFermentables = await this.fermentableService.insertMany(
        grains,
      );
      console.log(seededFermentables);
      return;
    }

    console.log('Grains types is not empty');
  }
}
