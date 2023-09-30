import { ParkingSpot } from '@entities/parking-spot.entity';
import { BaseRepository } from '@repositories/base-repository';
import { provide } from 'inversify-binding-decorators';

@provide(ParkingSpotRepository)
class ParkingSpotRepository extends BaseRepository<ParkingSpot> {
  constructor() {
    super();
    this.entityClass = ParkingSpot;
  }

  async findPlate(plate: string) {
    const repository = this.getRepository();
    const tableName = repository.metadata.tableName;

    const spotExists = await repository
      .createQueryBuilder(tableName)
      .where(`parking_spot.licensePlate = :licensePlate`, { licensePlate: plate })
      .getOne();

    return spotExists?.licensePlate ? true : false
  }

  async findAllWithRelationship(): Promise<ParkingSpot[]> {
    const repository = this.getRepository();
    const spots = await repository
      .createQueryBuilder('parking_spot')
      .leftJoinAndSelect('parking_spot.spot', 'spot')
      .getMany();
    return spots;
  }

  async findOneWithRelationship(id: string): Promise<ParkingSpot | null> {
    const repository = this.getRepository();
    const spots = await repository
      .createQueryBuilder('parking_spot')
      .leftJoinAndSelect('parking_spot.spot', 'spot')
      .where('parking_spot.id = :id', { id })
      .getOne();
    return spots;
  }
}

export { ParkingSpotRepository };
