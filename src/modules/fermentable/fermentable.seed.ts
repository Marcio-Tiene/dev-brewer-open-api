import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import grains from '../../seed-data/Fermentables/grains';
import { FermentableService } from './fermentable.service';
import sugars from '../../seed-data/Fermentables/sugar';

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
    const isNoGrains =
      (await this.fermentableService.find({ type: 'Grain' })).total === 0;

    if (isNoGrains) {
      const seededFermentables = await this.fermentableService.insertMany(
        grains,
      );
      console.log(seededFermentables);
    } else {
      console.log('Grains types is not empty');
    }

    const isNoSugars =
      (await this.fermentableService.find({ type: 'Sugar' })).total === 0;

    if (isNoSugars) {
      const seededFermentables = await this.fermentableService.insertMany(
        sugars,
      );
      console.log(seededFermentables);
    } else {
      console.log('Sugars types is not empty');
    }
  }
}
