import { ContainerModule } from "inversify";
import { CreateModule } from "@expressots/core";
import { CreateParkingSpotController } from "./create/parking-spot-create.controller";
import { FindAllParkingSpotController } from "./findall/parking-spot-findall.controller";
import { FindOneParkingSpotController } from "./findOne/findone-parking-spot.controller";

const ParkingSpotModule: ContainerModule = CreateModule([
  CreateParkingSpotController,
  FindAllParkingSpotController,
  FindOneParkingSpotController,
]);

export { ParkingSpotModule };
