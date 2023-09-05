import { CreateModule } from '@expressots/core';
import { ContainerModule } from 'inversify';
import { CreateSpotController } from './create/create-spot.controller';
import { FindAllSpotsController } from './findAll/find-all-spot.controller';
import { UpadateSpotController } from './update/update-spot.controller';

const SpotModule: ContainerModule = CreateModule([
  CreateSpotController,
  FindAllSpotsController,
  UpadateSpotController,
]);

export { SpotModule };
