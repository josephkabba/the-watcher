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

    if (req.query.id === undefined || req.query.id === null) {
      res.status(400).send({ statusCode: 400, message: "Please add id query" });
    }

    const database = await getDatabase();
    const repo = database.getRepository(ArticleModel);

    const id = req.query.id as unknown as string

    const data = await repo.findBy({
      id: Number.parseInt(id),
    });

    await database.destroy();

    res.status(200).send({ statusCode: 200, id, data });
  } catch (err: any) {
    res.status(500).send({ statusCode: 500, err });
  }
}
