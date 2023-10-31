import { Field, ObjectType, InputType } from "@nestjs/graphql";

@InputType("auth_users")
@ObjectType()
export class AuthUsersPartial {

  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  auth_role_id?: number;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  status?: number;

  @Field({ nullable: true })
  uuid?: string;

  @Field({ nullable: true })
  business_name?: string;

  @Field({ nullable: true })
  business_number?: string;

  @Field({ nullable: true })
  iata?: string;

  @Field({ nullable: true })
  business_phone?: string;

  @Field({ nullable: true })
  agent_balance?: number;

  @Field({ nullable: true })
  credit_limit?: number;

  @Field({ nullable: true })
  due_amount?: number;

  @Field({ nullable: true })
  date_of_birth?: Date;

  @Field({ nullable: true })
  title?: number;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  first_name?: string;

  @Field({ nullable: true })
  middle_name?: string;

  @Field({ nullable: true })
  last_name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  address2?: string;

  @Field({ nullable: true })
  country?: number;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  core_city_id?: number;

  @Field({ nullable: true })
  phone_code?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  zip_code?: number;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  last_login?: Date;

  @Field({ nullable: true })
  logout_date_time?: Date;

  @Field({ nullable: true })
  socialuserid?: string;

  @Field({ nullable: true })
  user_type?: string;

  @Field({ nullable: true })
  privilege_access?: number;

  @Field({ nullable: true })
  created_by_id?: number;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;

  @Field({ nullable: true })
  flightBookingId?: string;

  @Field({ nullable: true })
  domain_logo?: string;

  @Field({ nullable: true })
  api_list?: string;

}