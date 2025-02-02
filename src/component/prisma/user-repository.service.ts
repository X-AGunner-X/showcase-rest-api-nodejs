import { Injectable } from '@nestjs/common';
import { PrismaConnectionService } from './prisma-connection.service';
import { Prisma, User } from '@prisma/client';
import { UserRepository } from '../../user/user-facade.interface';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaConnectionService) {}

  async create(createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }
}
