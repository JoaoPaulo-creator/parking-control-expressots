import { provide } from "inversify-binding-decorators";
import { ICreateSpotRequest, ICreateSpotResponseDTO } from "./create-spot.dto";
import { SpotRepository } from "@repositories/spot/spot.repository";
import { Spot } from "@entities/spot.entity";

@provide(CreateSpotUseCase)
class CreateSpotUseCase {
  constructor(private spotRepository: SpotRepository) {}

  async execute(
    payload: ICreateSpotRequest,
  ): Promise<ICreateSpotResponseDTO | null> {
    const { isAvailable, number } = payload;
    const spotInstance = new Spot(isAvailable, number);

    const isSpotCreated = await this.spotRepository.create(spotInstance);
    let response: ICreateSpotResponseDTO;

    if (isSpotCreated) {
      response = {
        id: isSpotCreated.id,
        isAvailable: isSpotCreated.isAvailable,
        number: isSpotCreated.number,
      };

      return response;
    }

    return null;
  }
}

export { CreateSpotUseCase };
