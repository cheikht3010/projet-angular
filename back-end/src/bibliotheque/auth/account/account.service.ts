import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './account.entity';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async create(user: User): Promise<User> {
    console.log('save user', user);
    return await this.userRepository.save(user);
  }
}
