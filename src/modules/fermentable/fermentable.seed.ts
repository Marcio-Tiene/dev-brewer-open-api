import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import grains from '../../seed-data/Fermentables/grains';
import { FermentableService } from './fermentable.service';
import sugars from '../../seed-data/Fermentables/sugar';
import extracts from '../../seed-data/Fermentables/extracts';
import adjuncts from '../../seed-data/Fermentables/adjuncts';
import dryExtracts from '../../seed-data/Fermentables/dry-extracts';

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
    let fermentablesToSeed: TFermentables[] = [];
    const isNoGrains =
      (await this.fermentableService.find({ type: 'Grain' })).total === 0;

    if (isNoGrains) {
      fermentablesToSeed = [...fermentablesToSeed, ...grains];
    } else {
      console.log('Grains types is not empty');
    }

    const isNoSugars =
      (await this.fermentableService.find({ type: 'Sugar' })).total === 0;

    if (isNoSugars) {
      fermentablesToSeed = [...fermentablesToSeed, ...sugars];
    } else {
      console.log('Sugars types is not empty');
    }

    const hasNoExtracts =
      (await this.fermentableService.find({ type: 'Extract' })).total === 0;

    if (hasNoExtracts) {
      fermentablesToSeed = [...fermentablesToSeed, ...extracts];
    } else {
      console.log('Extracts types is not empty');
    }

    const hasNoDryExtracts =
      (await this.fermentableService.find({ type: 'Dry Extract' })).total === 0;

    if (hasNoDryExtracts) {
      fermentablesToSeed = [...fermentablesToSeed, ...dryExtracts];
    } else {
      console.log('Dry Extracts types is not empty');
    }
    const hasNoAdjuncts =
      (await this.fermentableService.find({ type: 'Adjunct' })).total === 0;

    if (hasNoAdjuncts) {
      fermentablesToSeed = [...fermentablesToSeed, ...adjuncts];
    } else {
      console.log('Adjunct types is not empty');
    }

    const seededFermentables = await this.fermentableService.insertMany(
      fermentablesToSeed,
    );
    console.log(seededFermentables);
  }
}
