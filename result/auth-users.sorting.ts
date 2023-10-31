import { Field, Int, ID, InputType } from "@nestjs/graphql";
import { BaseSorting } from "../base.sorting";

@InputType()
export class AuthUsersSorting {

  @Field((type) => BaseSorting, { nullable: true })
  id?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  auth_role_id?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  email?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  password?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  status?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  uuid?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  business_name?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  business_number?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  iata?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  business_phone?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  agent_balance?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  credit_limit?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  due_amount?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  date_of_birth?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  title?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  image?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  first_name?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  middle_name?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  last_name?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  address?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  address2?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  country?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  state?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  city?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  core_city_id?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  phone_code?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  phone?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  zip_code?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  bio?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  last_login?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  logout_date_time?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  socialuserid?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  user_type?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  privilege_access?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  created_by_id?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  created_at?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  updated_at?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  flightBookingId?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  domain_logo?: BaseSorting;

  @Field((type) => BaseSorting, { nullable: true })
  api_list?: BaseSorting;

}