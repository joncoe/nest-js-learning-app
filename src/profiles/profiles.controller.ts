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
import { ProfilesService } from './profiles.service';

@Controller('profiles') // the string declares the route. e.g. could be 'test/profiles'
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  // GET /profiles?location
  @Get()
  findAll(@Query('location') location: string) {
    return this.profilesService.findAll();
  }

  // Get /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.profilesService.findOne(id);
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create({ ...createProfileDto });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.profilesService.delete(id);
  }
}
