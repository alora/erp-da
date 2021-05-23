import { ArgsType, Field } from "@nestjs/graphql";
import { DphWhereUniqueInput } from "./DphWhereUniqueInput";
import { DphUpdateInput } from "./DphUpdateInput";

@ArgsType()
class UpdateDphArgs {
  @Field(() => DphWhereUniqueInput, { nullable: false })
  where!: DphWhereUniqueInput;
  @Field(() => DphUpdateInput, { nullable: false })
  data!: DphUpdateInput;
}

export { UpdateDphArgs };
