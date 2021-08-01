import { Command, Positional } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import { Grain, GrainDocument } from './grain.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import grains from 'src/InitialData/Fermentables/grains';
import { GrainService } from './grain.service';

@Injectable()
export class GrainCommand {
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

    console.log('Grains Documents is not empty');
  }
}
