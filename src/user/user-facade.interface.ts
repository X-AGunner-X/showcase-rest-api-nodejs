import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

export const USER_REPOSITORY = Symbol('UserRepository');

export interface UserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;
}
