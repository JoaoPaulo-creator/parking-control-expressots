import { BaseController, StatusCode } from '@expressots/core';
import {
  controller,
  httpDelete,
  requestParam,
  response,
} from 'inversify-express-utils';
import { IDeleteParkingSpotRequestDTO } from './delete-parking-spot.dto';
import { DeleteParkingSpotUseCase } from './delete-parking-spot.usecase';

@controller('/parking-spot')
class DeleteParkingSpotController extends BaseController {
  constructor(private findOneParkingSpotUseCase: DeleteParkingSpotUseCase) {
    super('find-one-parking-spot-controller');
  }

  @httpDelete('/:id')
  async execute(
    @requestParam() id: IDeleteParkingSpotRequestDTO,
    @response() res: any
  ) {
    return this.callUseCaseAsync(
      this.findOneParkingSpotUseCase.execute(id),
      res,
      StatusCode.NoContent
    );
  }
}

export { DeleteParkingSpotController };
