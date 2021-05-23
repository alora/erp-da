import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { DphWhereUniqueInput } from "../../dph/base/DphWhereUniqueInput";
@ObjectType()
class Order {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  customer?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DphWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DphWhereUniqueInput)
  @IsOptional()
  dph?: DphWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  priceIncTax!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Order };
