import { ContainerModule } from "inversify";
import { CreateModule } from "@expressots/core";
import { ParkingSpotCreateController } from "./create/parking-spot-create.controller";
import { ParkingSpotFindAllController } from "./findall/parking-spot-findall.controller";

const ParkingSpotModule: ContainerModule = CreateModule([
  ParkingSpotCreateController,
  ParkingSpotFindAllController,
]);

export { ParkingSpotModule };
