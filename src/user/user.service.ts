import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_REPOSITORY, UserRepository } from './user-facade.interface';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  // findAll() {
  //   return `This action returns all user`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
  //
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
