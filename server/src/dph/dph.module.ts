import { Module } from "@nestjs/common";
import { DphModuleBase } from "./base/dph.module.base";
import { DphService } from "./dph.service";
import { DphController } from "./dph.controller";
import { DphResolver } from "./dph.resolver";

@Module({
  imports: [DphModuleBase],
  controllers: [DphController],
  providers: [DphService, DphResolver],
  exports: [DphService],
})
export class DphModule {}
