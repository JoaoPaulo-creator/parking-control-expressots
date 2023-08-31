import { provide } from "inversify-binding-decorators";
import { IEntity } from "./base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@provide(ParkingSpot)
@Entity()
class ParkingSpot implements IEntity {
  @PrimaryGeneratedColumn("uuid")
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

  constructor(
    apartment: string,
    block: string,
    brandCar: string,
    colorCar: string,
    licensePlate: string,
    modelCar: string,
    responsibleName: string,
  ) {
    this.apartment = apartment;
    this.block = block;
    this.brandCar = brandCar;
    this.colorCar = colorCar;
    this.licensePlate = licensePlate;
    this.modelCar = modelCar;
    this.responsibleName = responsibleName;
  }
}

export { ParkingSpot };
