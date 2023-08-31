import { BaseController, StatusCode } from "@expressots/core";
import {
  controller,
  httpGet,
  requestParam,
  response,
} from "inversify-express-utils";
import { IFindOneParkingSpotRequestDTO } from "./findone-parking-spot.dto";
import { FindOneParkingSpotUseCase } from "./findone-parking-spot.usecase";

@controller("/parking-spot")
class FindOneParkingSpotController extends BaseController {
  constructor(private findOneParkingSpotUseCase: FindOneParkingSpotUseCase) {
    super("find-one-parking-spot-controller");
  }

  @httpGet("/:id")
  async execute(
    @requestParam() id: IFindOneParkingSpotRequestDTO,
    @response() res: any,
  ) {
    return this.callUseCaseAsync(
      this.findOneParkingSpotUseCase.execute(id),
      res,
      StatusCode.OK,
    );
  }
}

export { FindOneParkingSpotController };
