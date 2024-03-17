import Link from "next/link";
import { getGames } from "@/api/games";
import style from "./page.module.scss";
import GameItem from "@/components/GameItem/GameItem";
import cn from "classnames";
import CategoryItem from "@/components/CategoryItem/CategoryItem";

export default async function Games() {
  const data = await getGames();
  const providers = data
    .map((el) => el.provider)
    .reduce((acc: string[], item: string) => {
      if (acc.includes(item)) {
        return acc;
      }
      return [...acc, item];
    }, []);

  return (
    <div className={cn("page", style.page)}>
      <div className={style.titleSection}>
        <h1 className={"page-title"}>All games</h1>
        <div className={style.categories}>
          <span className={cn("block-title", style.categoriesTitle)}>
            Providers
          </span>
          <div className={style.categoriesList}>
            {providers &&
              providers.map((item) => (
                <Link key={item} href={`/games/${item}`}>
                  <CategoryItem name={item} />
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className={cn(style.gamesCnt, "scrollbar")}>
        <div className={style.gamesList}>
          {data &&
            data.map((item) => (
              <Link
                key={item.identifier}
                href={`/games/${item.provider}/${item.seo_title}`}
              >
                <GameItem
                  title={item.title}
                  image={item.identifier}
                  provider={item.provider}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
