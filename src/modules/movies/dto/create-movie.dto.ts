import { IsEnum, IsBoolean, IsString, IsDate } from 'class-validator';
import { Genre } from '../enums/genre.enum';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsEnum(Genre)
  genre: Genre;

  @IsDate()
  releaseDate: Date;

  @IsDate()
  endDate: Date;

  @IsBoolean()
  isPlaying: boolean;
}