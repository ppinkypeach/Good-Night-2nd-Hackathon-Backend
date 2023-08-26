import { Body, Controller, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private moviesService: MoviesService) {}

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto){
        return this.moviesService.createMovie(createMovieDto);
    }
}
