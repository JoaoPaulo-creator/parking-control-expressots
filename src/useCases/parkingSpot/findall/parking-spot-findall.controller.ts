import { BaseController, StatusCode } from '@expressots/core';
import { controller, httpGet, response } from 'inversify-express-utils';
import { FindAllParkingSpotsUseCase } from './parking-spot-findall.usecase';

// for some reason, the path '/parking-spot/spots' returns an internal server error
@controller('/spots')
class FindAllParkingSpotController extends BaseController {
  constructor(private findallSpotsUseCase: FindAllParkingSpotsUseCase) {
    super('find-all-spots-controller');
  }

  @httpGet('/')
  async execute(@response() res: any) {
    return this.callUseCaseAsync(
      this.findallSpotsUseCase.execute(),
      res,
      StatusCode.OK
    );
  }
}

export { FindAllParkingSpotController };
