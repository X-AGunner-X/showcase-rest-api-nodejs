import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { USER_REPOSITORY } from './user-facade.interface';
import { PrismaModule } from '../component/prisma/prisma.module';
import { PrismaUserRepository } from '../component/prisma/user-repository.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
  imports: [PrismaModule],
})
export class UserModule {}
