import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { MoviesModule } from './modules/movies/movies.module'; 
import { MysqlModule } from './config/mysql/mysql.module';
import { TypeOrmModule } from '@nestjs/typeorm';





@Module({
  imports: [MoviesModule, ReviewsModule, MysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
