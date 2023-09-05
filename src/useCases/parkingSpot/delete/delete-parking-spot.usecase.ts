import { ParkingSpotRepository } from '@repositories/parkingspot/parking-spot.repository';
import { provide } from 'inversify-binding-decorators';
import { IDeleteParkingSpotRequestDTO } from './delete-parking-spot.dto';

@provide(DeleteParkingSpotUseCase)
class DeleteParkingSpotUseCase {
  constructor(private parkingSpotRepository: ParkingSpotRepository) {}

  async execute(
    payload: IDeleteParkingSpotRequestDTO
  ): Promise<boolean | null> {
    const spot = await this.parkingSpotRepository.delete(payload.id);
    if (spot) {
      return spot;
    }

    return null;
  }
}

export { DeleteParkingSpotUseCase };
