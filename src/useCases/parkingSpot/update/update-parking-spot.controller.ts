import { BaseController, StatusCode } from '@expressots/core';
import {
  controller,
  httpPut,
  requestBody,
  requestParam,
  response,
} from 'inversify-express-utils';
import {
  IUpdateParkingSpotRequestDTO,
  IUpdateParkingSpotRequestParamDTO,
} from './update-parking-spot.dto';
import { UpdateParkingSpotUseCase } from './update-parking-spot.usecase';

@controller('/parking-spot/update')
class UpdateParkingSpotController extends BaseController {
  constructor(private updateParkingSpotUseCase: UpdateParkingSpotUseCase) {
    super('update-parking-spot-controller');
  }

  @httpPut('/:id')
  async execute(
    @requestParam() id: IUpdateParkingSpotRequestParamDTO,
    @requestBody() payload: IUpdateParkingSpotRequestDTO,
    @response() res: any
  ) {
    return this.callUseCaseAsync(
      this.updateParkingSpotUseCase.execute(id, payload),
      res,
      StatusCode.OK
    );
  }
}

export { UpdateParkingSpotController };
