import { ParkingSpotRepository } from "@repositories/parkingspot/parking-spot.repository";
import { provide } from "inversify-binding-decorators";
import {
  IFindOneParkingSpotRequestDTO,
  IFindOneParkingSpotResponseDTO,
} from "./findone-parking-spot.dto";

@provide(FindOneParkingSpotUseCase)
class FindOneParkingSpotUseCase {
  constructor(private parkingSpotRepository: ParkingSpotRepository) {}

  async execute(
    payload: IFindOneParkingSpotRequestDTO,
  ): Promise<IFindOneParkingSpotResponseDTO | null> {
    const spot = await this.parkingSpotRepository.find(payload.id);

    if (spot) {
      return {
        id: spot.id,
        apartment: spot.apartment,
        block: spot.block,
        brandCar: spot.block,
        modelCar: spot.modelCar,
        colorCar: spot.colorCar,
        licensePlate: spot.licensePlate,
        responsibleName: spot.responsibleName,
        isAvailable: spot.isAvailable,
        number: spot.number,
      };
    }

    return null;
  }
}

export { FindOneParkingSpotUseCase };
