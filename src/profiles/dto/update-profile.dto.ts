import { IsString, Length, Min } from 'class-validator';
export class UpdateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @Length(2, 100, {
    message: 'Your description is WAY TOO SHORT',
  })
  description: string;
}
