import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from '../enums/genre.enum';
import { BaseEntity } from 'src/common/models/base.model';

@Entity()
export class Movies extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'enum', enum: Genre })
  genre: Genre;

  @Column({ type: 'date' })
  releaseDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'boolean' })
  isPlaying: boolean;
}

