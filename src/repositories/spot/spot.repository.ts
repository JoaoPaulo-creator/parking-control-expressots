import { Spot } from '@entities/spot.entity';
import { BaseRepository } from '@repositories/base-repository';
import { provide } from 'inversify-binding-decorators';

@provide(SpotRepository)
class SpotRepository extends BaseRepository<Spot> {
  constructor() {
    super();
    this.entityClass = Spot;
  }

  async updateSpot(id: string, spotStatus: boolean): Promise<Spot | null> {
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
          isAvailable: spotStatus,
        })
        .where('id = :id', { id: id })
        .execute();

      return spotExists;
    }

    return null;
  }
}

export { SpotRepository };
