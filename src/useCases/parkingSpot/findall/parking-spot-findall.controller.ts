import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { FindAllParkingSpotsUseCase } from "./parking-spot-findall.usecase";

@controller("/parking-spot/spots")
class ParkingSpotFindAllController extends BaseController {
  constructor(private findallSpotsUseCase: FindAllParkingSpotsUseCase) {
    super("find-all-spots-controller");
  }

  @httpGet("/")
  async execute(@response() res: any) {
    return this.callUseCaseAsync(
      this.findallSpotsUseCase.execute(),
      res,
      StatusCode.OK,
    );
  }
}

export { ParkingSpotFindAllController };
