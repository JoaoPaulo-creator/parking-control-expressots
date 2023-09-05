import { ParkingSpot } from "@entities/parking-spot.entity";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";

@provide(ParkingSpotRepository)
class ParkingSpotRepository extends BaseRepository<ParkingSpot> {
  constructor() {
    super();
    this.entityClass = ParkingSpot;
  }

  async findAllWithRelationship(): Promise<ParkingSpot[]> {
    const repository = this.getRepository();
    const spots = await repository
      .createQueryBuilder("parking_spot")
      .leftJoinAndSelect("parking_spot.spot", "spot")
      .getMany();
    return spots;
  }
}

export { ParkingSpotRepository };
