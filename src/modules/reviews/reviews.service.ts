import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reviews } from './models/reviews.model';
import { Repository } from 'typeorm';
import { Movies } from '../movies/models/movies.model';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {

    constructor(
        @InjectRepository(Reviews)
        private reviewsRepository: Repository<Reviews>,
        @InjectRepository(Movies)
        private moviesRepository: Repository<Movies>
    ) {}

    // 리뷰 등록
    async createReview(createReviewDto: CreateReviewDto): Promise<Reviews>{
        const { movieId } = createReviewDto;
        const movie = await this.moviesRepository.findOne({ where: { id: movieId } });

        if(!movie){
            throw new NotFoundException("해당 영화가 존재하지 않아 리뷰를 등록할 수 없습니다!");
        }

        const review = this.reviewsRepository.create(createReviewDto);
        await this.reviewsRepository.save(review);
        return review;
    }
}
