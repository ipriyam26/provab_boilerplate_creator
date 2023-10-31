import { BaseFilter } from "./../base.filter";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthUsersFilter {

  @Field((type) => BaseFilter, { nullable: true })
  id: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  auth_role_id: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  email: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  password: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  status: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  uuid: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  business_name: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  business_number: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  iata: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  business_phone: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  agent_balance: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  credit_limit: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  due_amount: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  date_of_birth: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  title: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  image: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  first_name: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  middle_name: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  last_name: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  address: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  address2: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  country: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  state: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  city: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  core_city_id: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  phone_code: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  phone: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  zip_code: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  bio: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  last_login: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  logout_date_time: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  socialuserid: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  user_type: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  privilege_access: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  created_by_id: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  created_at: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  updated_at: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  flightBookingId: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  domain_logo: BaseFilter;

  @Field((type) => BaseFilter, { nullable: true })
  api_list: BaseFilter;

}