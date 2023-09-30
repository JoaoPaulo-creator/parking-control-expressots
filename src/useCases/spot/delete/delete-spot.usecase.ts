import { SpotRepository } from "@repositories/spot/spot.repository"
import { provide } from "inversify-binding-decorators"
import { IDeleteParamRequest } from "./delete-spot.dto"
import { AppError, StatusCode } from '@expressots/core';
import { Report } from '@expressots/core';

@provide(DeleteSpotUseCase)
class DeleteSpotUseCase {
  constructor(private spotRepository: SpotRepository) {}

  async execute(spotId: IDeleteParamRequest): Promise<void> {
    const spot = await this.spotRepository.find(spotId.id)

    if(spot?.isAvailable) {
      await this.spotRepository.delete(spotId.id)
    }else {
      const err = new AppError(
        StatusCode.BadRequest,
        'Cannot delete spot, as it is still occupied',
        'delete-spot-usecase'
      )
      Report.Error(err)
    }
    
  }
}

export { DeleteSpotUseCase }