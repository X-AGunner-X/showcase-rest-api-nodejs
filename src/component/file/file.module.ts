import { Module } from '@nestjs/common';
import { FileSystemService } from './file-system.service';
import { DirectoryLocationModule } from '../directory-location/directory-location.module';

@Module({
  providers: [FileSystemService],
  exports: [FileSystemService, DirectoryLocationModule],
  imports: [DirectoryLocationModule],
})
export class FileModule {}
