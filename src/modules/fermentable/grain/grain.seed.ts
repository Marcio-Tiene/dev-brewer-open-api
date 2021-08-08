import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import grains from 'src/InitialData/Fermentables/grains';
import { GrainService } from './grain.service';

@Injectable()
export class GrainSeed {
  constructor(
    @Inject(GrainService) private readonly grainService: GrainService,
  ) {}

  @Command({
    command: 'seed:grains',
    describe: 'Seed initial grains',
    autoExit: true,
  })
  async insertMany() {
    const isDbEmpty = (await this.grainService.findAll()).length < 1;

    if (isDbEmpty) {
      const seededGrains = await this.grainService.insertMany(grains);
      console.log(seededGrains);
      return;
    }
    console.log(grains);

    console.log('Grains Documents is not empty');
  }
}
