import { provide } from 'inversify-binding-decorators';
import { IEntity } from './base.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Spot } from './spot.entity';

@provide(ParkingSpot)
@Entity()
class ParkingSpot implements IEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  apartment!: string;

  @Column()
  block!: string;

  @Column()
  brandCar!: string;

  @Column()
  colorCar!: string;

  @Column()
  licensePlate!: string;

  @Column()
  modelCar!: string;

  @Column()
  responsibleName!: string;

  @ManyToOne(() => Spot, (spot) => spot.id)
  spot: Spot;

  constructor(
    apartment: string,
    block: string,
    brandCar: string,
    colorCar: string,
    licensePlate: string,
    modelCar: string,
    responsibleName: string,
    spot: Spot
  ) {
    this.apartment = apartment;
    this.block = block;
    this.brandCar = brandCar;
    this.colorCar = colorCar;
    this.licensePlate = licensePlate;
    this.modelCar = modelCar;
    this.responsibleName = responsibleName;
    this.spot = spot;
  }
}

export { ParkingSpot };
