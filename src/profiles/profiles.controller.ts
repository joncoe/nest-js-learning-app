import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles') // the string declares the route. e.g. could be 'test/profiles'
export class ProfilesController {
  // GET /profiles?location
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  // Get /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return [{ id }];
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
      message: createProfileDto.message,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return {
      id,
      message: '✅',
      ...updateProfileDto,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return true;
  }
}
