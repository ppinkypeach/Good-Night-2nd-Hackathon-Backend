import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  content: string;

  @IsNumber()
  rating: number;

  @IsNumber()
  movieId: number;
}