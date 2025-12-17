import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

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
}
