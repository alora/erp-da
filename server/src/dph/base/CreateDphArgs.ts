import { ArgsType, Field } from "@nestjs/graphql";
import { DphCreateInput } from "./DphCreateInput";

@ArgsType()
class CreateDphArgs {
  @Field(() => DphCreateInput, { nullable: false })
  data!: DphCreateInput;
}

export { CreateDphArgs };
