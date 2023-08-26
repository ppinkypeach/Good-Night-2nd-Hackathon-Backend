import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { Reviews } from './models/reviews.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from '../movies/models/movies.model';

@Module({
  imports: [TypeOrmModule.forFeature([Reviews, Movies])], 
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
