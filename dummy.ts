import { Entity, Column } from "typeorm";
import { ObjectType, Field, Int, Float } from "@nestjs/graphql";
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
  IsDate,
  IsNumber,
} from "class-validator";
import { BaseEntity } from "../base.entity";

@ObjectType()
@Entity("activities_booking_activitydetail")
export class ActivitiesBookingActivityDetail extends BaseEntity {
  @IsNotEmpty()
! @IsString()
  @MaxLength(20)
  @Field()
  @Column({ length: 20, nullable: false})
  booking_source: string;

  @IsNotEmpty()
  !@IsString()
  @MaxLength(20)
  @Field()
  @Column({ length: 20, nullable: false })
  booking_reference: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @Field({ nullable: true })
  @Column({ length: 100, nullable: true })
  app_reference: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(45)
  @Field()
  @Column({ length: 45, nullable: false })
  activity_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @Field()
  @Column({ length: 20, nullable: false })
  activity_code: string;

  @IsEnum(["TICKET", "EXCURSION"])
  @Field()
  @Column({ type: "enum", enum: ["TICKET", "EXCURSION"], nullable: false })
  activity_type: string;

  @IsOptional()
  @IsDate()
  @Field((type) => Date, { nullable: true })
  @Column({ type: "datetime", nullable: true })
  dateFrom: Date;

  @IsOptional()
  @IsDate()
  @Field((type) => Date, { nullable: true })
  @Column({ type: "datetime", nullable: true })
  dateTo: Date;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  @Column({ type: "text", nullable: true })
  address: string;

  @IsOptional()
  @IsString()
  @MaxLength(45)
  @Field({ nullable: true })
  @Column({ length: 45, nullable: true })
  city: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  @Field({ nullable: true })
  @Column({ length: 30, nullable: true })
  country: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  @Column({ type: "longtext", nullable: false })
  description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @Field()
  @Column({ length: 20, nullable: false })
  status: string;

  @IsNotEmpty()
  @IsNumber()
  @Field((type) => Float)
  @Column({ type: "float", nullable: false })
  totalAmount: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  @Column({ type: "text", nullable: true })
  contactInfo: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  @Column({ type: "longtext", nullable: true })
  attributes: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  @Column({ type: "longtext", nullable: true })
  aminities: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  @Field({ nullable: true })
  @Column({ length: 20, nullable: true })
  supplier_name: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  @Field({ nullable: true })
  @Column({ length: 20, nullable: true })
  supplier_vatNo: string;

  @IsOptional()
  @IsInt()
  @Field((type) => Int, { nullable: true })
  @Column({ type: "int", width: 5, nullable: true })
  comminisionPercentage: number;

  @IsOptional()
  @IsNumber()
  @Field((type) => Float, { nullable: true })
  @Column({ type: "float", nullable: true })
  comminisionAmt: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  @Column({ type: "longtext", nullable: true })
  pickup: string;

  @IsOptional()
  @IsNumber()
  @Field((type) => Float, { nullable: true })
  @Column({ type: "float", nullable: true })
  comminisionVateAmt: number;

  @IsOptional()
  @IsInt()
  @Field((type) => Int, { nullable: true })
  @Column({ type: "int", width: 5, nullable: true })
  comminisionVatPercentage: number;
}
