import { Body, Controller, Param, Post, Get, Delete, Patch } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private moviesService: MoviesService) {}

    // 영화 등록
    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto){
        return this.moviesService.createMovie(createMovieDto);
    }

    // 영화 단일 조회
    @Get('/:id')
    getMovieById(@Param('id') id: number){
        return this.moviesService.getMovieById(id);
    }

    // 영화 삭제
    @Delete('/:id')
    deleteMovieById(@Param('id') id: number){
        return this.moviesService.deleteMovie(id);
    }

    // 영화 수정
    @Patch('/:id')
    updtateMovie(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto){
        return this.moviesService.updateMovie(id, updateMovieDto);
    }
}
