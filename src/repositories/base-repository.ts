import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { IBaseRepository } from "./base-repository.interface";
import { IEntity } from "@entities/base.entity";
import { ObjectType, Repository } from "typeorm";
import { TypeORMProvider } from "@providers/orm/typeorm/typeorm.provider";

@provide(BaseRepository)
class BaseRepository<T extends IEntity> implements IBaseRepository<T> {
  protected entityClass!: ObjectType<T>;
  protected getRepository(): Repository<T> {
    return TypeORMProvider.dataSource.getRepository(this.entityClass);
  }

  create(item: T): T | null {
    const repository = this.getRepository();
    repository.save(item);
    return item;
  }

  update(item: T): T | null {
    const repository = this.getRepository();
    repository.save(item);

    return item;
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
