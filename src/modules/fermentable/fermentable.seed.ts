import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import grains from 'src/seed-data/Fermentables/grains';
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
    const isDbEmpty = (await this.fermentableService.find()).length < 1;

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
