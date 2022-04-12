import { NextApiRequest, NextApiResponse } from "next";
import { DataSource } from "typeorm";
import { getDatabase } from "./database";
import { getNews } from "./jobs/news/news";
import { mapStoryToArticle } from "./mappers/mappers";
import { ArticleModel } from "./models/local/model";

const execute = async (country: "UG" | "US", database: DataSource) => {
  const articles = await getNews(country);

  for (let i = 0; i < articles.length; i++) {
    const article =
      country === "US"
        ? mapStoryToArticle(articles[i], "g")
        : mapStoryToArticle(articles[i], "l");
    console.log(article);
    const model = new ArticleModel(article);
    const repo = await database.manager.save(model);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const database = await getDatabase();
    await database
      .getRepository(ArticleModel)
      .createQueryBuilder("article")
      .delete()
      .from(ArticleModel)
      .execute();
    await execute("UG", database);
    await execute("US", database);
    res.status(200).send({
      statusCode: 200,
      response: "task complete",
      message: "cache has been updated",
    });
  } catch (err: any) {
    res.status(500).send({ statusCode: 500, err });
  }
}
