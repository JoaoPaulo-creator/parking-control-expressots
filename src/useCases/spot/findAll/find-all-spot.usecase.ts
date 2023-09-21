import { SpotRepository } from '@repositories/spot/spot.repository';
import { provide } from 'inversify-binding-decorators';
import { IFindAllSpotResponseDTO } from './find-all-spot.dto';

@provide(FindAllSpotsUseCase)
class FindAllSpotsUseCase {
  constructor(private spotRepository: SpotRepository) {}

  async execute(): Promise<IFindAllSpotResponseDTO[]> {
    const spots = await this.spotRepository.findAll();
    const mappedSpots: IFindAllSpotResponseDTO[] = [];

    spots.forEach((s) =>
      mappedSpots.push({
        id: s.id,
        isAvailable: s.isAvailable,
        number: s.number,
      })
    );

    return mappedSpots;
  }
}

export { FindAllSpotsUseCase };
