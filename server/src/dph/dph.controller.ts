import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DphService } from "./dph.service";
import { DphControllerBase } from "./base/dph.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("dphs")
@common.Controller("dphs")
export class DphController extends DphControllerBase {
  constructor(
    protected readonly service: DphService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
