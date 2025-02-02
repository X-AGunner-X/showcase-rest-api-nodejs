import { Module } from '@nestjs/common';
import { PrismaConnectionService } from './prisma-connection.service';
import { PrismaUserRepository } from './user-repository.service';

@Module({
  providers: [PrismaConnectionService, PrismaUserRepository],
  exports: [PrismaConnectionService],
})
export class PrismaModule {}
