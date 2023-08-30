import { ParkingSpot } from "@entities/parking-spot.entity";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";

@provide(ParkingSpotRepository)
class ParkingSpotRepository extends BaseRepository<ParkingSpot> {
  constructor() {
    super();
    this.entityClass = ParkingSpot;
  }
}

export { ParkingSpotRepository };
