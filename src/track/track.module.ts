import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { FileModule } from '../component/file/file.module';
import { RedisModule } from '../component/redis/redis.module';
import { RedisClientWrapperService } from '../component/redis/redis-client-wrapper.service';
import { INCREMENT_COUNT_STORAGE } from './increment-count-storage.interface';
import { REQUEST_CONTENT_STORAGE } from './request-content-storage.interface';
import { FileSystemService } from '../component/file/file-system.service';

@Module({
  controllers: [TrackController],
  providers: [
    TrackService,
    {
      provide: INCREMENT_COUNT_STORAGE,
      useClass: RedisClientWrapperService,
    },
    {
      provide: REQUEST_CONTENT_STORAGE,
      useClass: FileSystemService,
    },
  ],
  imports: [FileModule, RedisModule],
})
export class TrackModule {}
