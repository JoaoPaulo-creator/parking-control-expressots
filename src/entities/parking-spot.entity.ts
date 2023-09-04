import { provide } from "inversify-binding-decorators";
import { IEntity } from "./base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type SpotProps = {
  isAvailable: boolean;
  number: number;
};

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

  @Column({
    nullable: true,
  })
  isAvailable?: boolean;

  @Column({
    nullable: true,
  })
  number?: number;

  constructor(
    apartment: string,
    block: string,
    brandCar: string,
    colorCar: string,
    licensePlate: string,
    modelCar: string,
    responsibleName: string,
    isAvailable?: boolean,
    number?: number,
  ) {
    this.apartment = apartment;
    this.block = block;
    this.brandCar = brandCar;
    this.colorCar = colorCar;
    this.licensePlate = licensePlate;
    this.modelCar = modelCar;
    this.responsibleName = responsibleName;
    this.isAvailable = isAvailable;
    this.number = number;
  }
}

export { ParkingSpot };
