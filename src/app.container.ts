import { AppContainer } from "@expressots/core";
import { AppModule } from "@useCases/app/app.module";
import { ParkingSpotModule } from "@useCases/parkingSpot/parking-spot.module";

const appContainer = new AppContainer();

const container = appContainer.create([
  // Add your modules here
  AppModule,
  ParkingSpotModule,
]);

export { container };
