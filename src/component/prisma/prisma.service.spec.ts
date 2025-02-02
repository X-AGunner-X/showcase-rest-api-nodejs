import { Test, TestingModule } from '@nestjs/testing';
import { PrismaConnectionService } from './prisma-connection.service';

describe('PrismaService', () => {
  let service: PrismaConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaConnectionService],
    }).compile();

    service = module.get<PrismaConnectionService>(PrismaConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
