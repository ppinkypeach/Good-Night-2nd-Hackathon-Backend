import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from './models/movies.model';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieResponse } from './response/movie-response.interface';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Genre } from './enums/genre.enum';

@Injectable()
export class MoviesService {
    
    constructor(
        @InjectRepository(Movies)
        private moviesRepository: Repository<Movies>
    ) {}

    // 영화 등록
    async createMovie(createMovieDto: CreateMovieDto): Promise<Movies> {
        // 제목을 null로 등록하려고 할 때 예외를 처리
        if(!createMovieDto.title){
            throw new NotFoundException("제목은 입력해주셔야 합니다!");
        }
        const newMovie = this.moviesRepository.create(createMovieDto);
        await this.moviesRepository.save(newMovie);

        return newMovie;
    }

    // 영화 단일 조회
    async getMovieById(id: number): Promise<MovieResponse> {
        // 삭제 처리된 영화는 조회하지 않도록 처리
        const movie = await this.moviesRepository.findOne({ where: { id: id, deletedAt: null} });

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

    // 영화 삭제
    async deleteMovie(id: number): Promise<void>{

        await this.getMovieById(id);
        const deleteMovie = await this.moviesRepository.softDelete(id);

        if(deleteMovie.affected === 0) {
            throw new NotFoundException("영화 삭제가 제대로 되지 않았어요!");
        }
    }

    // 영화 수정
    async updateMovie(id: number, updateMovieDto: UpdateMovieDto): Promise<MovieResponse> {

        let movie = await this.getMovieById(id)
        await this.moviesRepository.update(id, updateMovieDto);
        const updatedMovie = await this.getMovieById(id);

        return updatedMovie;
        
    }

    //영화 목록 조회
    async getMovieAll(genre?: Genre, isPlaying?: Boolean){
        
        const queryBuilder = this.moviesRepository.createQueryBuilder('movie');

        if(genre){
            queryBuilder.andWhere('movie.genre = :genre', { genre });
        }

        if (typeof isPlaying !== 'undefined') {
            queryBuilder.andWhere('movie.isPlaying = :isPlaying', { isPlaying: isPlaying ? 1 : 0 });
          }
        
        queryBuilder.orderBy('movie.releaseDate', 'ASC');

        return await queryBuilder.getMany();

    }

}

