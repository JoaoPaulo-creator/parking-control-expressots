import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { FindAllSpotsUseCase } from "./find-all-spot.usecase";

@controller("/spot-list")
class FindAllSpotsController extends BaseController {
  constructor(private findAllUseCase: FindAllSpotsUseCase) {
    super("find-all-spots-controller");
  }

  @httpGet("/")
  async execute(@response() res: any) {
    return this.callUseCaseAsync(
      this.findAllUseCase.execute(),
      res,
      StatusCode.OK,
    );
  }
}

export { FindAllSpotsController };
