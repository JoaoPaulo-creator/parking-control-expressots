import { SpotRepository } from "@repositories/spot/spot.repository";
import { provide } from "inversify-binding-decorators";
import { IFindAllSpotResponseDTO } from "./find-all-spot.dto";

@provide(FindAllSpotsUseCase)
class FindAllSpotsUseCase {
  constructor(private spotRepository: SpotRepository) {}

  async execute(): Promise<IFindAllSpotResponseDTO[]> {
    return this.spotRepository.findAll();
  }
}

export { FindAllSpotsUseCase };
