import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('class')
export class ClassModel {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100
  })
  name: string;

  @Column()
  duration: number;

  @CreateDateColumn({
    name: 'created_At'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_At'
  })
  updatedAt: Date;
}
