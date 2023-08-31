import { ParkingSpotRepository } from "@repositories/parkingspot/parking-spot.repository";
import { provide } from "inversify-binding-decorators";
import { IFindAllParkingSpotsResponseDTO } from "./parking-spot-findAll.dto";

@provide(FindAllParkingSpotsUseCase)
class FindAllParkingSpotsUseCase {
  constructor(private parkingRepository: ParkingSpotRepository) {}

  async execute(): Promise<IFindAllParkingSpotsResponseDTO[] | null> {
    const spots = await this.parkingRepository.findAll();
    return spots;
  }
}

export { FindAllParkingSpotsUseCase };
