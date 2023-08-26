import { BaseEntity, Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Movies } from '../../movies/models/movies.model'; 
@Entity()
export class Reviews extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  content: string;

  @Column({ type: 'float', nullable: false })
  rating: number;

  @ManyToOne(() => Movies)
  @JoinColumn({ name: 'movieId' })
  movie: Movies;

  @Column()
  movieId: number;
}