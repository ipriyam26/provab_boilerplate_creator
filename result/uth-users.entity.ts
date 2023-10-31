import { Column, Entity } from "typeorm";
import {  } from "@nestjs/graphql";
import { IsEnum, Min, Max, IsOptional, IsNumber, Length } from "class-validator";
import { BaseEntity } from "../base.entity";

@InputType("auth_users")
@ObjectType()
@Entity("auth_users")
export class authUsers extends BaseEntity {

@Min(-99999999999)
@Max(99999999999)
@IsInt()
@Field()
@Column({  type: 'int', length: 11  })
id: number;

@Min(-99999999999)
@Max(99999999999)
@IsInt()
@Field()
@Column({  type: 'int', length: 11  })
auth_role_id: number;

@Length(191)
@IsString()
@Field()
@Column({  type: 'varchar', length: 191  })
email: string;

@Length(456)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 456, nullable: true  })
password: string;

@Min(-9)
@Max(9)
@IsOptional()
@IsInt()
@Field()
@Column({  type: 'tinyint', length: 1, default: 0, nullable: true  })
status: number;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
uuid: string;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
business_name: string;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
business_number: string;

@Length(225)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 225, nullable: true  })
iata: string;

@Length(20)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 20, nullable: true  })
business_phone: string;

@IsNumber({maxDecimalPlaces:2})
@IsOptional()
@IsNumber()
@Field()
@Column({  type: 'double', length: 16, precision: 2, default: 0.00, nullable: true  })
agent_balance: number;

@IsNumber({maxDecimalPlaces:2})
@IsOptional()
@IsNumber()
@Field()
@Column({  type: 'double', length: 16, precision: 2, default: 0.00, nullable: true  })
credit_limit: number;

@IsNumber({maxDecimalPlaces:2})
@IsOptional()
@IsNumber()
@Field()
@Column({  type: 'double', length: 16, precision: 2, default: 0.00, nullable: true  })
due_amount: number;

@IsOptional()
@IsDate()
@Field()
@Column({  type: 'date', nullable: true  })
date_of_birth: Date;

@Min(-9999999999)
@Max(9999999999)
@IsOptional()
@IsInt()
@Field()
@Column({  type: 'int', length: 10, default: 1, nullable: true  })
title: number;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
image: string;

@Length(255)
@IsString()
@Field()
@Column({  type: 'varchar', length: 255  })
first_name: string;

@Length(45)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 45, nullable: true  })
middle_name: string;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
last_name: string;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
address: string;

@Length(225)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 225, nullable: true  })
address2: string;

@Min(-9999999999)
@Max(9999999999)
@IsOptional()
@IsInt()
@Field()
@Column({  type: 'int', length: 10, nullable: true  })
country: number;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
state: string;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
city: string;

@Min(-99999999999)
@Max(99999999999)
@IsOptional()
@IsInt()
@Field()
@Column({  type: 'int', length: 11, nullable: true  })
core_city_id: number;

@Length(10)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 10, nullable: true  })
phone_code: string;

@Length(20)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 20, nullable: true  })
phone: string;

@Min(-9999999999)
@Max(9999999999)
@IsOptional()
@IsInt()
@Field()
@Column({  type: 'int', length: 10, nullable: true  })
zip_code: number;

@IsOptional()
@IsString
@Field()
@Column({  type: 'text', nullable: true  })
bio: string;

@IsOptional()
@IsDate()
@Field()
@Column({  type: 'timestamp', nullable: true  })
last_login: Date;

@IsOptional()
@IsDate()
@Field()
@Column({  type: 'timestamp', nullable: true  })
logout_date_time: Date;

@Length(255)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 255, nullable: true  })
socialuserid: string;

@IsEnum(['Guest', 'User'])
@IsOptional()
@IsEnum()
@Field()
@Column({  type: 'enum', enum: ['Guest', 'User'], nullable: true  })
user_type: string;

@Min(-9999)
@Max(9999)
@IsOptional()
@IsInt()
@Field()
@Column({  type: 'int', length: 4, default: 0, nullable: true  })
privilege_access: number;

@Min(-99999999999)
@Max(99999999999)
@IsOptional()
@IsInt()
@Field()
@Column({  type: 'int', length: 11, default: 0, nullable: true  })
created_by_id: number;

@IsOptional()
@IsDate()
@Field()
@Column({  type: 'timestamp', default: current_timestamp(), nullable: true  })
created_at: Date;

@IsOptional()
@IsDate()
@Field()
@Column({  type: 'datetime', nullable: true  })
updated_at: Date;

@Length(45)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 45, nullable: true  })
flightBookingId: string;

@Length(456)
@IsOptional()
@IsString()
@Field()
@Column({  type: 'varchar', length: 456, nullable: true  })
domain_logo: string;

@IsOptional()
@IsString
@Field()
@Column({  type: 'text', nullable: true  })
api_list: string;

}