import { CreateModule } from "@expressots/core";
import { ParkingSpotCreateController } from "./create/parking-spot-create.controller";

const ParkingSpotModule = CreateModule([ParkingSpotCreateController]);

export { ParkingSpotModule };
