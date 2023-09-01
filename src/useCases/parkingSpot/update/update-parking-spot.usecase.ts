import { ParkingSpotRepository } from "@repositories/parkingspot/parking-spot.repository";
import { provide } from "inversify-binding-decorators";
import {
  IUpdateParkingSpotRequestDTO,
  IUpdateParkingSpotRequestParamDTO,
  IUpdateParkingSpotResponseDTO,
} from "./update-parking-spot.dto";

@provide(UpdateParkingSpotUseCase)
class UpdateParkingSpotUseCase {
  constructor(private parkingSpotRepository: ParkingSpotRepository) {}

  async execute(
    param: IUpdateParkingSpotRequestParamDTO,
    payload: IUpdateParkingSpotRequestDTO,
  ): Promise<IUpdateParkingSpotResponseDTO | null> {
    const spot = await this.parkingSpotRepository.update(param.id, payload);

    console.log(payload);

    if (spot) {
      return {
        id: spot.id,
        apartment: spot.apartment,
        block: spot.block,
        brandCar: spot.brandCar,
        modelCar: spot.modelCar,
        colorCar: spot.colorCar,
        licensePlate: spot.licensePlate,
        responsibleName: spot.responsibleName,
      };
    }

    return null;
  }
}

export { UpdateParkingSpotUseCase };
