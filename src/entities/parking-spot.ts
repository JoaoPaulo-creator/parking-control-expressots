import { provide } from "inversify-binding-decorators";
import { IEntity } from "./base.entity";
import { randomUUID } from "node:crypto";

@provide(ParkingSpot)
class ParkingSpot implements IEntity {
  id!: string;
  apartment!: string;
  block!: string;
  brandCar!: string;
  colorCar!: string;
  licensePlate!: string;
  modelCar!: string;
  responsibleName!: string;

  constructor() {
    this.id = randomUUID();
  }
}

export { ParkingSpot };
