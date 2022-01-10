import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';

import { StyleService } from './style.service';
import * as fs from 'fs';
import * as path from 'path';
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
    let valuesToBeInserted = [] as TStyle[];
    console.log('seed styles');
    const stylesFolder = path.resolve(
      __dirname,
      '../../seed-data/Styles/bjcp2015',
    );

    const files = fs.readdirSync(stylesFolder);
    const styleFiles = files.filter(
      (file: string) => !file.includes('.d.') && !file.includes('.map'),
    );

    const processFiles = styleFiles.map(async (file) => {
      const filePath = path.resolve(stylesFolder, file);
      const name = file
        .replace('.js', '')
        .split('-')
        .map((word, index) => {
          if (index === 0) {
            return word;
          }

          return word[0].toUpperCase() + word.slice(1);
        })
        .join('');

      const { default: value } = await import(filePath);
      const importedValues = { [name]: value, category: value[0].category };

      const hasNoCategory =
        (await this.styleService.find({ category: importedValues.category }))
          .total === 0;

      if (hasNoCategory) {
        valuesToBeInserted = [...valuesToBeInserted, ...importedValues[name]];
      } else {
        console.log(`The ${importedValues.category} category is not empty`);
      }
    });

    await Promise.all(processFiles);
    if (valuesToBeInserted.length > 0) {
      await this.styleService.insertMany(valuesToBeInserted);
    }
    console.log(valuesToBeInserted);
  }
}
