import { Spot } from '@entities/spot.entity';
import { BaseRepository } from '@repositories/base-repository';
import { provide } from 'inversify-binding-decorators';

@provide(SpotRepository)
class SpotRepository extends BaseRepository<Spot> {
  constructor() {
    super();
    this.entityClass = Spot;
  }

  async updateSpot(id: string, item: Spot): Promise<Spot | null> {
    const repository = this.getRepository();
    const tableName = repository.metadata.tableName;

    const spotExists = await repository
      .createQueryBuilder(tableName)
      .where(`${tableName}.id = :id`, { id })
      .getOne();

    const newSpotAvailabilityValue: boolean | undefined = item.isAvailable;

    if (spotExists) {
      repository
        .createQueryBuilder(tableName)
        .update(Spot)
        .set({
          isAvailable: newSpotAvailabilityValue,
        })
        .where('id = :id', { id: id })
        .execute();

      return item;
    }

    return null;
  }

  async changeSpotStatus(id: string, status: boolean): Promise<void> {
    const repository = this.getRepository();
    const tableName = repository.metadata.tableName;

    const spotExists = await repository
      .createQueryBuilder(tableName)
      .where(`${tableName}.id = :id`, { id })
      .getOne();

    if (spotExists) {
      repository
        .createQueryBuilder(tableName)
        .update(Spot)
        .set({
          isAvailable: status,
        })
        .where('id = :id', { id: id })
        .returning(['id'])
        .execute();
    }
  }
}

export { SpotRepository };
