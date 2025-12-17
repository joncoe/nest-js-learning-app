import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    { id: randomUUID(), name: 'Jcoe', description: 'Disko' },
    { id: randomUUID(), name: 'Kanabun', description: 'Sweet Bear' },
    { id: randomUUID(), name: 'Muts-san', description: 'Fat Cat' },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.findAll().find((profile) => profile.id === id);
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile = {
      ...createProfileDto,
      id: randomUUID(),
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updatedProfileDto: CreateProfileDto) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) return {};
    matchingProfile.name = updatedProfileDto.name;
    matchingProfile.description = updatedProfileDto.description;
    return matchingProfile;
  }

  delete(id: string) {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (matchingProfileIndex > 1) this.profiles.splice(matchingProfileIndex, 1);
  }
}
