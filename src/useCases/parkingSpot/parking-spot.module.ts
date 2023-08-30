import { ContainerModule } from "inversify";
import { CreateModule } from "@expressots/core";
import { ParkingSpotCreateController } from "./create/parking-spot-create.controller";

const ParkingSpotModule: ContainerModule = CreateModule([
  ParkingSpotCreateController,
]);

export { ParkingSpotModule };
