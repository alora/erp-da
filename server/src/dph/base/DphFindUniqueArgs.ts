import { ArgsType, Field } from "@nestjs/graphql";
import { DphWhereUniqueInput } from "./DphWhereUniqueInput";

@ArgsType()
class DphFindUniqueArgs {
  @Field(() => DphWhereUniqueInput, { nullable: false })
  where!: DphWhereUniqueInput;
}

export { DphFindUniqueArgs };
