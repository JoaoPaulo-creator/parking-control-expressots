import { ParkingSpotRepository } from '@repositories/parkingspot/parking-spot.repository';
import { provide } from 'inversify-binding-decorators';
import { IDeleteParkingSpotRequestDTO } from './delete-parking-spot.dto';
import { SpotRepository } from '@repositories/spot/spot.repository';

@provide(DeleteParkingSpotUseCase)
class DeleteParkingSpotUseCase {
  constructor(
    private parkingSpotRepository: ParkingSpotRepository,
    private spotRepository: SpotRepository
  ) {}

  async execute(payload: IDeleteParkingSpotRequestDTO): Promise<void> {
    const spot = await this.parkingSpotRepository.findOneWithRelationship(
      payload.id
    );

    if (spot) {
      await this.spotRepository.changeSpotStatus(spot!.spot.id, true);
      await this.parkingSpotRepository.delete(payload.id);
    }
  }
}

export { DeleteParkingSpotUseCase };
