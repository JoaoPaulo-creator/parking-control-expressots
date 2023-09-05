import { BaseController, StatusCode } from '@expressots/core';
import {
  controller,
  httpPost,
  requestBody,
  response,
} from 'inversify-express-utils';
import { CreateSpotUseCase } from './create-spot.usecase';
import { ICreateSpotRequest } from './create-spot.dto';

@controller('/spot/create')
class CreateSpotController extends BaseController {
  constructor(private createSpotUseCase: CreateSpotUseCase) {
    super('create-spot-controller');
  }

  @httpPost('/')
  async execute(
    @requestBody() payload: ICreateSpotRequest,
    @response() res: any
  ) {
    return this.callUseCaseAsync(
      this.createSpotUseCase.execute(payload),
      res,
      StatusCode.Created
    );
  }
}

export { CreateSpotController };
