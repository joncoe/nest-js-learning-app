import { IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(3, 200)
  name: string;

  @IsString()
  description: string;
}
