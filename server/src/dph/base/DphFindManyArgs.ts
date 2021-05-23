import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DphWhereInput } from "./DphWhereInput";
import { Type } from "class-transformer";
import { DphOrderByInput } from "./DphOrderByInput";

@ArgsType()
class DphFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DphWhereInput,
  })
  @Field(() => DphWhereInput, { nullable: true })
  @Type(() => DphWhereInput)
  where?: DphWhereInput;

  @ApiProperty({
    required: false,
    type: DphOrderByInput,
  })
  @Field(() => DphOrderByInput, { nullable: true })
  @Type(() => DphOrderByInput)
  orderBy?: DphOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DphFindManyArgs };
