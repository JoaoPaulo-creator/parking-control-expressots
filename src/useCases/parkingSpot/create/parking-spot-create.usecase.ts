import { provide } from "inversify-binding-decorators";
import { Report, StatusCode } from "@expressots/core";
import {
  ICreateParkintSpotRequestDTO,
  ICreateParkintSpotResponseDTO,
} from "./parking-spot-create.dto";
import { ParkingSpotRepository } from "@repositories/parkingspot/parking-spot.repository";
import { ParkingSpot } from "@entities/parking-spot";

@provide(CreateParkingSpotUseCase)
class CreateParkingSpotUseCase {
  constructor(
    private parkingRepository: ParkingSpotRepository,
    private spot: ParkingSpot,
  ) {}

  execute(
    payload: ICreateParkintSpotRequestDTO,
  ): ICreateParkintSpotResponseDTO | null {
    this.spot.apartment = payload.apartment;
    this.spot.block = payload.block;
    this.spot.brandCar = payload.brandCar;
    this.spot.colorCar = payload.colorCar;
    this.spot.licensePlate = payload.licensePlate;
    this.spot.modelCar = payload.modelCar;
    this.spot.responsibleName = payload.responsibleName;

    const isSpotAvailable = this.parkingRepository.findByLicensePlate(
      this.spot.licensePlate,
    );

    console.log("plate from use case: ", this.spot.licensePlate);
    console.log(isSpotAvailable);

    if (isSpotAvailable) {
      Report.Error(
        "Spot is not available",
        StatusCode.UnprocessableEntity,
        "create-parking-spot-usecase",
      );
    }

    this.parkingRepository.create(this.spot);

    return {
      id: this.spot.id,
      apartment: this.spot.apartment,
      block: this.spot.block,
      brandCar: this.spot.brandCar,
      colorCar: this.spot.colorCar,
      licensePlate: this.spot.licensePlate,
      modelCar: this.spot.modelCar,
      responsibleName: this.spot.responsibleName,
    };
  }
}

export { CreateParkingSpotUseCase };
