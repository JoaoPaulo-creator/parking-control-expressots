import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpDelete, params, requestParam, response } from "inversify-express-utils";
import { DeleteSpotUseCase } from "./delete-spot.usecase";
import { IDeleteParamRequest } from "./delete-spot.dto";



@controller('/spot/delete')
class DeleteSpotController extends BaseController {
  constructor(private useCase: DeleteSpotUseCase) {
    super('delete-spot-controlelr')
  }

  @httpDelete('/:id')
  async execute(@requestParam() id: IDeleteParamRequest, @response() res: any) {
    return this.callUseCaseAsync(
      this.useCase.execute(id),
      res,
      StatusCode.NoContent
    )
  }
}

export { DeleteSpotController }