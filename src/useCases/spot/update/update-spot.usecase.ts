import { SpotRepository } from '@repositories/spot/spot.repository';
import { provide } from 'inversify-binding-decorators';
import {
  IUpdateSpotRequest,
  IUpdateSpotRequestParam,
  IUpdateSpotResponseDTO,
} from './update-spot.dto';

@provide(UpdateSpotUseCase)
class UpdateSpotUseCase {
  constructor(private spotRepository: SpotRepository) {}

  async execute(
    param: IUpdateSpotRequestParam,
    payload: IUpdateSpotRequest
  ): Promise<{
    id: string;
    isAvailable: boolean | undefined;
    number: number | undefined;
  } | null> {
    const spot = await this.spotRepository.updateSpot(
      param.id,
      payload.isAvailabe
    );

    if (spot) {
      return {
        id: spot.id,
        isAvailable: spot.isAvailable,
        number: spot.number,
      };
    }
    return null;
  }
}

export { UpdateSpotUseCase };
