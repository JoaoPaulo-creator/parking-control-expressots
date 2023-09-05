import { BaseController, StatusCode } from '@expressots/core';
import {
  controller,
  httpPatch,
  httpPut,
  requestBody,
  requestParam,
  response,
} from 'inversify-express-utils';
import { UpdateSpotUseCase } from './update-spot.usecase';
import { IUpdateSpotRequest, IUpdateSpotRequestParam } from './update-spot.dto';

@controller('/spot')
class UpadateSpotController extends BaseController {
  constructor(private updateSpotUseCase: UpdateSpotUseCase) {
    super('update-spot-controller');
  }

  @httpPatch('/:id')
  async execute(
    @requestParam() id: IUpdateSpotRequestParam,
    @requestBody() payload: IUpdateSpotRequest,
    @response() res: any
  ) {
    return this.callUseCaseAsync(
      this.updateSpotUseCase.execute(id, payload),
      res,
      StatusCode.OK
    );
  }
}

export { UpadateSpotController };
