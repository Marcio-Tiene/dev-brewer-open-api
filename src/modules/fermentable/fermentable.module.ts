import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { GrainModule } from './grain/grain.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'fermentables',
        module: FermentableModule,
        children: [{ path: 'grains', module: GrainModule }],
      },
    ]),

    GrainModule,
  ],
  exports: [GrainModule],
})
export class FermentableModule {}
