import { Module } from '@nestjs/common';
import { Movies } from './models/movies.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports: [TypeOrmModule.forFeature([Movies])], 
    controllers: [MoviesController],
    providers: [MoviesService],
  })
  export class MoviesModule {}