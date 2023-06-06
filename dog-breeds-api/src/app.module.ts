import { Module } from '@nestjs/common';
import { DataProviderService } from './services/shared/data-provider.service';
import { BreedsService } from './services/breeds/breeds.service';
import { BreedsController } from './controllers/breeds/breeds.controller';

@Module({
  imports: [],
  controllers: [BreedsController],
  providers: [DataProviderService, BreedsService],
})
export class AppModule {}
