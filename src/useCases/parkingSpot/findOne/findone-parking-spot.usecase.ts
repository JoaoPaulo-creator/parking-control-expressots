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
    const s = await this.parkingSpotRepository.findOneWithRelationship(
      payload.id,
    );

    if (s) {
      return {
        id: s.id,
        apartment: s.apartment,
        block: s.block,
        brandCar: s.block,
        modelCar: s.modelCar,
        colorCar: s.colorCar,
        licensePlate: s.licensePlate,
        responsibleName: s.responsibleName,
        spot: {
          id: s.spot!.id,
          isAvailable: s.spot!.isAvailable,
          number: s.spot!.number,
        },
      };
    }

    return null;
  }
}

export { FindOneParkingSpotUseCase };
