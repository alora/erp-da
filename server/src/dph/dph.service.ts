import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DphServiceBase } from "./base/dph.service.base";

@Injectable()
export class DphService extends DphServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
