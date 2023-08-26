import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from '../../modules/movies/models/movies.model';
import { Reviews } from '../../modules/reviews/models/reviews.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'heketon',
      password: '0716',
      database: 'nestHeketon',
      entities: [Movies, Reviews],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class MysqlModule {}
