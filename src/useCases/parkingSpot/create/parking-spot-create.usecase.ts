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
    this.spotRepository.changeSpotStatus(spotId, status);
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

    const plateAlreadyReserved = await this.parkingRepository.findPlate(licensePlate)

    if(plateAlreadyReserved) {
      const err = new AppError(
        StatusCode.BadRequest,
        'Car already reserved a spot',
        'create-parking-spot-usecase'
      )

      Report.Error(err)
    }


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

    const reservingSpot = await this.parkingRepository.create(spotInstance);
    let response: ICreateParkintSpotResponseDTO;

    if (reservingSpot) {
      this.setSpotAsUnavailable(spot.id, false);

      response = {
        id: reservingSpot.id,
        apartment: reservingSpot.apartment,
        block: reservingSpot.block,
        brandCar: reservingSpot.brandCar,
        colorCar: reservingSpot.colorCar,
        licensePlate: reservingSpot.licensePlate,
        modelCar: reservingSpot.modelCar,
        responsibleName: reservingSpot.responsibleName,
        spot: {
          id: reservingSpot.spot!.id,
          isAvailable: reservingSpot.spot?.isAvailable,
          number: reservingSpot.spot?.number,
        },
      };

      return response;
    }

    return reservingSpot;
  }
}

export { CreateParkingSpotUseCase };
