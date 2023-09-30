import { ParkingSpotRepository } from '@repositories/parkingspot/parking-spot.repository';
import { provide } from 'inversify-binding-decorators';
import {
  IUpdateParkingSpotRequestDTO,
  IUpdateParkingSpotRequestParamDTO,
  IUpdateParkingSpotResponseDTO,
} from './update-parking-spot.dto';
import { AppError, StatusCode, Report } from '@expressots/core';

@provide(UpdateParkingSpotUseCase)
class UpdateParkingSpotUseCase {
  constructor(private parkingSpotRepository: ParkingSpotRepository) {}

  async execute(
    param: IUpdateParkingSpotRequestParamDTO,
    payload: IUpdateParkingSpotRequestDTO
  ): Promise<IUpdateParkingSpotResponseDTO | null> {
    const spot = await this.parkingSpotRepository.update(param.id, payload);

    if (!spot) {
      const err = new AppError(
        StatusCode.NotFound,
        'Spot not found',
        'upadate-parking-spot-usecase'
      );
      Report.Error(err);
    }

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
        spot: {
          id: spot.spot!.id,
          isAvailable: spot.spot?.isAvailable,
          number: spot.spot?.number,
        },
      };
    }

    return null;
  }
}

export { UpdateParkingSpotUseCase };
