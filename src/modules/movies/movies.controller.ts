import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

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
}
