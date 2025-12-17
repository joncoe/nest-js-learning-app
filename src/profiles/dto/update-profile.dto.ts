import { IsString, Length, Min } from 'class-validator';
export class UpdateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @Min(25, {
    message: 'Your description is WAY TOO SHORT',
  })
  description: string;
}
