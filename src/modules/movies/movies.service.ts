import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from './models/movies.model';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieResponse } from './response/movie-response.interface';

@Injectable()
export class MoviesService {
    
    constructor(
        @InjectRepository(Movies)
        private moviesRepository: Repository<Movies>
    ) {}

    // 영화 등록
    async createMovie(createMovieDto: CreateMovieDto): Promise<Movies>{
        // 제목을 null로 등록하려고 할 때 예외를 처리
        if(!createMovieDto.title){
            throw new NotFoundException("제목은 입력해주셔야 합니다!");
        }
        const newMovie = this.moviesRepository.create(createMovieDto);
        await this.moviesRepository.save(newMovie);

        return newMovie;
    }
    // 영화 단일 조회
    async getMovieById(id: number): Promise<MovieResponse>{
        const movie = await this.moviesRepository.findOne({ where: { id: id } });

        // 존재하지 않는 영화를 조회할 경우의 예외를 처리
        if(!movie){
            throw new NotFoundException("존재하지 않는 영화입니다!");
        }

        return {
            title: movie.title,
            genre: movie.genre,
            releaseDate: movie.releaseDate,
            endDate: movie.endDate,
            isPlaying: movie.isPlaying,
          };

    }


}

