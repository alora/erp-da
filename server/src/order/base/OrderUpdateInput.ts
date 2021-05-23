import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { DphWhereUniqueInput } from "../../dph/base/DphWhereUniqueInput";
@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
    type: CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput;

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
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number;

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
export { OrderUpdateInput };
