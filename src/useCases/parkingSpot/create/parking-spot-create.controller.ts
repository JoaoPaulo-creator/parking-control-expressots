import { BaseController, StatusCode } from '@expressots/core';
import {
  controller,
  httpPost,
  requestBody,
  response,
} from 'inversify-express-utils';
import { CreateParkingSpotUseCase } from './parking-spot-create.usecase';
import {
  ICreateParkintSpotRequestDTO,
  ICreateParkintSpotResponseDTO,
} from './parking-spot-create.dto';

@controller('/parking-spot/create')
class CreateParkingSpotController extends BaseController {
  constructor(private createParkingSpotUseCase: CreateParkingSpotUseCase) {
    super('create-parking-spot-controller');
  }

  @httpPost('/')
  async execute(
    @requestBody() payload: ICreateParkintSpotRequestDTO,
    @response() res: Response
  ): Promise<ICreateParkintSpotResponseDTO> {
    return this.callUseCaseAsync(
      this.createParkingSpotUseCase.execute(payload),
      res,
      StatusCode.Created
    );
  }
}

export { CreateParkingSpotController };
