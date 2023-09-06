import { SpotRepository } from '@repositories/spot/spot.repository';
import { provide } from 'inversify-binding-decorators';
import {
  IUpdateSpotRequestDTO,
  IUpdateSpotRequestParam,
  IUpdateSpotResponseDTO,
} from './update-spot.dto';

@provide(UpdateSpotUseCase)
class UpdateSpotUseCase {
  constructor(private spotRepository: SpotRepository) {}

  async execute(
    param: IUpdateSpotRequestParam,
    payload: IUpdateSpotRequestDTO
  ): Promise<{
    id: string;
    isAvailable: boolean | undefined;
    number: number | undefined;
  } | null> {
    console.log(payload);

    const { id } = param;
    const { number } = payload;
    const spot = await this.spotRepository.updateSpot(id, payload);

    if (spot) {
      return {
        id: spot.id,
        number: spot.number,
        isAvailable: spot.isAvailable,
      };
    }
    return null;
  }
}

export { UpdateSpotUseCase };
