import { CreateModule } from "@expressots/core";
import { ContainerModule } from "inversify";
import { CreateSpotController } from "./create/create-spot.controller";

const SpotModule: ContainerModule = CreateModule([CreateSpotController]);

export { SpotModule };
