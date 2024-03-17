import { getGames } from "@/api/games";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import cn from "classnames";

export async function generateStaticParams() {
  const pages = await getGames();
  return pages.flatMap((item) => ({
    game: item.seo_title,
    provider: item.provider,
  }));
}

export default async function GamePage({
  params,
}: {
  params: { game: string; provider: string };
}) {
  const data = await getGames();
  const game = data.find((item) => item.seo_title === params.game);

  if (!game) {
    notFound();
  }

  return (
    <div className={style.container}>
      <h1 className={"page-title"}>{game && game.title}</h1>

      <div className={style.content}>
        {game && (
          <Image
            className={style.image}
            src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
            width={380}
            height={380}
            alt=""
          />
        )}

        <div className={style.gameData}>
          <div className={style.provider}>
            <span className={cn("block-title", style.providerTitle)}>
              Provider
            </span>
            <Link
              href={`/games/${game.provider}`}
              className={style.providerName}
            >
              {game.provider}
            </Link>
          </div>

          <div className={style.categories}>
            <span className={cn("block-title", style.categoriesTitle)}>
              Categories
            </span>
            <ul className={style.categoriesList}>
              {game &&
                game.categories.map((item) => (
                  <li className={style.categoryItem} key={item}>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
