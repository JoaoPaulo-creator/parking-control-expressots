import { provide } from "inversify-binding-decorators";
import { IBaseRepository } from "./base-repository.interface";
import { IEntity } from "@entities/base.entity";
import { ObjectType, Repository } from "typeorm";
import { TypeORMProvider } from "@providers/orm/typeorm/typeorm.provider";
import { ParkingSpot } from "@entities/parking-spot.entity";

@provide(BaseRepository)
class BaseRepository<T extends IEntity> implements IBaseRepository<T> {
  protected entityClass!: ObjectType<T>;
  protected getRepository(): Repository<T> {
    return TypeORMProvider.dataSource.getRepository(this.entityClass);
  }

  async create(item: T): Promise<T | null> {
    const repository = this.getRepository();
    const savedItem = await repository.save(item);
    return savedItem;
  }

  async update(id: string, item: T): Promise<T | null> {
    const repository = this.getRepository();
    const tableName = repository.metadata.tableName;

    const spotExists = repository
      .createQueryBuilder(tableName)
      .where(`${tableName}.id = :id`, { id })
      .getOne();

    if (await spotExists) {
      repository
        .createQueryBuilder(tableName)
        .update(ParkingSpot)
        .set(item)
        .where("id = :id", { id: id })
        .execute();

      repository.save(item);
      return item;
    }

    return null;
  }

  async delete(id: string): Promise<boolean> {
    const repository = this.getRepository();
    const res = await repository.delete(id);

    return (
      res.affected !== null && res.affected !== undefined && res.affected > 0
    );
  }

  async find(id: string): Promise<T | null> {
    const repository = this.getRepository();
    const tableName = repository.metadata.tableName;
    const result = await repository
      .createQueryBuilder(tableName)
      .where(`${tableName}.id = :id`, { id })
      .getOne();

    return result;
  }

  async findAll(): Promise<T[]> {
    const repository = this.getRepository();
    const spots = await repository.find();
    return spots;
  }
}

export { BaseRepository };
