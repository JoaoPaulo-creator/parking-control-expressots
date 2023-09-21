import { provide } from 'inversify-binding-decorators';
import {
  ICreateParkintSpotRequestDTO,
  ICreateParkintSpotResponseDTO,
} from './parking-spot-create.dto';
import { ParkingSpotRepository } from '@repositories/parkingspot/parking-spot.repository';
import { ParkingSpot } from '@entities/parking-spot.entity';
import { SpotRepository } from '@repositories/spot/spot.repository';
import { AppError, StatusCode } from '@expressots/core';
import { Report } from '@expressots/core';

@provide(CreateParkingSpotUseCase)
class CreateParkingSpotUseCase {
  constructor(
    private parkingRepository: ParkingSpotRepository,
    private spotRepository: SpotRepository
  ) {}

  private async setSpotAsUnavailable(spotId: string, status: boolean) {
    this.spotRepository.setAsUnavailable(spotId, status);
  }

  async execute(
    payload: ICreateParkintSpotRequestDTO
  ): Promise<ICreateParkintSpotResponseDTO | null> {
    const {
      apartment,
      block,
      brandCar,
      colorCar,
      licensePlate,
      modelCar,
      responsibleName,
      spot,
    } = payload;

    const spotInstance = new ParkingSpot(
      apartment,
      block,
      brandCar,
      colorCar,
      licensePlate,
      modelCar,
      responsibleName,
      spot
    );
    const parkingSpot = await this.spotRepository.find(spot.id);

    if (!parkingSpot!.isAvailable) {
      const err = new AppError(
        StatusCode.UnprocessableEntity,
        'Spot is not available',
        'create-parking-spot-usecase'
      );

      Report.Error(err);
    }

    const isSpotSelected = await this.parkingRepository.create(spotInstance);
    let response: ICreateParkintSpotResponseDTO;

    if (isSpotSelected) {
      this.setSpotAsUnavailable(spot.id, false);

      response = {
        id: isSpotSelected.id,
        apartment: isSpotSelected.apartment,
        block: isSpotSelected.block,
        brandCar: isSpotSelected.brandCar,
        colorCar: isSpotSelected.colorCar,
        licensePlate: isSpotSelected.licensePlate,
        modelCar: isSpotSelected.modelCar,
        responsibleName: isSpotSelected.responsibleName,
        spot: {
          id: isSpotSelected.spot!.id,
          isAvailable: isSpotSelected.spot?.isAvailable,
          number: isSpotSelected.spot?.number,
        },
      };

      return response;
    }

    return isSpotSelected;
  }
}

export { CreateParkingSpotUseCase };
