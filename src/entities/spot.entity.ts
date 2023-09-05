import { provide } from 'inversify-binding-decorators';
import { IEntity } from './base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@provide(Spot)
@Entity()
class Spot implements IEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    nullable: true,
  })
  isAvailable?: boolean;

  @Column({
    nullable: true,
  })
  number?: number;

  constructor(isAvailable?: boolean, number?: number) {
    this.isAvailable = isAvailable;
    this.number = number;
  }
}

export { Spot };
