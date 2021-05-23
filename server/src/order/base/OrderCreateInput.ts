import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { DphWhereUniqueInput } from "../../dph/base/DphWhereUniqueInput";
@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: true,
    type: CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  customer!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DphWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DphWhereUniqueInput)
  @IsOptional()
  @Field(() => DphWhereUniqueInput, {
    nullable: true,
  })
  dph?: DphWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  priceIncTax?: number | null;
}
export { OrderCreateInput };
