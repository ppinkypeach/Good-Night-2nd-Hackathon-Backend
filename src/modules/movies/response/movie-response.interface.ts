import { Genre } from "../enums/genre.enum";

export interface MovieResponse {
    title: string;
    genre: Genre;  
    releaseDate: Date;
    endDate: Date;
    isPlaying: boolean;
  }