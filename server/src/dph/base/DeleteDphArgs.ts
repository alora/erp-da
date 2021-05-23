import { ArgsType, Field } from "@nestjs/graphql";
import { DphWhereUniqueInput } from "./DphWhereUniqueInput";

@ArgsType()
class DeleteDphArgs {
  @Field(() => DphWhereUniqueInput, { nullable: false })
  where!: DphWhereUniqueInput;
}

export { DeleteDphArgs };
