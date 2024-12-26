import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignUpUserDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  lastName: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  password: string;

  @Field()
  @IsString()
  @IsOptional()
  @Length(10, 15)
  phoneNumber?: string;

  @Field()
  @IsString()
  @IsOptional()
  address?: string;
}
