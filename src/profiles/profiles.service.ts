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
}
