import { Body, Controller, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
    
    constructor(private reviewService: ReviewsService) {}

    // 리뷰 등록
    @Post()
    createReview(@Body() createReviewDto: CreateReviewDto){
        return this.reviewService.createReview(createReviewDto);
    }
}
