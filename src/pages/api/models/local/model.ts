import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface Article {
  id?: number;
  title: string;
  date: string;
  type: "g" | "l";
  author: string;
  story: string;
  image: string;
  source_url: string;
}

@Entity()
export class ArticleModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
  })
  title?: string;

  @Column({
    length: "100",
    nullable: true,
  })
  date?: string;

  @Column({
    length: 1,
  })
  type?: string;

  @Column({
    length: 10000,
    nullable: true,
  })
  author?: string;

  @Column({
    length: 10000,
  })
  story?: string;

  @Column({
    length: 300,
    nullable: true,
  })
  image?: string;

  @Column({
    length: 300,
    nullable: true,
  })
  source_url?: string;

  constructor(data?: Article) {
    this.title = data?.title;
    this.date = data?.date;
    this.type = data?.type;
    this.author = data?.author;
    this.story = data?.story;
    this.image = data?.image;
    this.source_url = data?.source_url;
  }
}
