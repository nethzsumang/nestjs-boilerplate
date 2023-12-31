import { IsEmail, IsString, Length } from 'class-validator';

/**
 * CreateUserDto class
 * @author Kenneth Sumang
 */
export default class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @Length(1, 20)
  username: string;

  @IsString()
  password: string;

  @IsString()
  @IsEmail()
  email: string;
}
