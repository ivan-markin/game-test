import { getGames } from "@/api/games";
import Link from "next/link";
import { notFound } from "next/navigation";
import style from "./page.module.scss";
import cn from "classnames";
import GameItem from "@/components/GameItem/GameItem";

export async function generateStaticParams() {
  const games = await getGames();

  return games.map((game) => ({
    provider: game.provider,
  }));
}

export default async function ProviderPage({
  params,
}: {
  params: { provider: string };
}) {
  const data = await getGames();
  const filteredData = data.filter((el) => el.provider === params.provider);

  if (filteredData.length === 0) {
    notFound();
  }

  return (
    <div className={style.container}>
      <span className={"block-title"}>Provider</span>
      <h1 className={cn("page-title", style.title)}>{params.provider}</h1>

      <div className={cn(style.gamesCnt, "scrollbar")}>
        <div className={style.gamesList}>
          {filteredData.map((item) => (
            <Link
              href={`/games/${params.provider}/${item.seo_title}`}
              key={item.identifier}
              className={style.gameItem}
            >
              <GameItem
                image={item.identifier}
                title={item.title}
                provider={item.provider}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
