import { getDatabase } from "./database";
import { getNews } from "./jobs/news/news";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import schedule from "node-schedule";
import { getArticle } from "./jobs/news/articles";
import { mapStoryToArticle } from "./mappers/mappers";
import { ArticleModel } from "./models/local/model";
import { DataSource } from "typeorm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const database = await getDatabase();
    const repo = database.getRepository(ArticleModel);

    const data = await repo.createQueryBuilder("article").getMany();

    await database.destroy();

    res.status(200).send({ statusCode: 200, data });
  } catch (err: any) {
    res.status(500).send({ statusCode: 500, err });
  }
}
