import { AppContainer } from "@expressots/core";
import { AppModule } from "@useCases/app/app.module";
import { ParkingSpotModule } from "@useCases/parkingSpot/parking-spot.module";
import { UserModule } from "@useCases/user/user.module";

const appContainer = new AppContainer();

const container = appContainer.create([
  // Add your modules here
  AppModule,
  UserModule,
  ParkingSpotModule,
]);

export { container };
