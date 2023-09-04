import { ParkingSpot } from "@entities/parking-spot.entity";
import { Spot } from "@entities/spot.entity";
import { TypeORMProvider } from "@providers/orm/typeorm/typeorm.provider";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";

@provide(SpotRepository)
class SpotRepository extends BaseRepository<Spot> {
  constructor() {
    super();
    this.entityClass = Spot;
  }
}

export { SpotRepository };
