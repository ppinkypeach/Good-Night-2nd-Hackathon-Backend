import { PrimaryGeneratedColumn, 
        CreateDateColumn, 
        UpdateDateColumn,
        DeleteDateColumn, 
        BaseEntity as TypeOrmBaseEntity } 
from 'typeorm';

export abstract class BaseEntity extends TypeOrmBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

