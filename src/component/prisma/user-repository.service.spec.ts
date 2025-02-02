import { Test, TestingModule } from '@nestjs/testing';
import { PrismaUserRepository } from './user-repository.service';

describe('UserRepositoryService', () => {
  let service: PrismaUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaUserRepository],
    }).compile();

    service = module.get<PrismaUserRepository>(PrismaUserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
