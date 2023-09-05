import { ParkingSpotRepository } from '@repositories/parkingspot/parking-spot.repository';
import { provide } from 'inversify-binding-decorators';
import { IFindAllParkingSpotsResponseDTO } from './parking-spot-findall.dto';

@provide(FindAllParkingSpotsUseCase)
class FindAllParkingSpotsUseCase {
  constructor(private parkingRepository: ParkingSpotRepository) {}

  async execute(): Promise<IFindAllParkingSpotsResponseDTO[] | null> {
    const spots = await this.parkingRepository.findAllWithRelationship();
    const mappedSpots: IFindAllParkingSpotsResponseDTO[] = [];

    spots.forEach((s) => {
      mappedSpots.push({
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
      });
    });

    return mappedSpots;
  }
}

export { FindAllParkingSpotsUseCase };
