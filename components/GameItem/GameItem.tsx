import Image from "next/image";
import style from "./GameItem.module.scss";

interface props {
  image: string;
  title: string;
  provider: string;
}

export default function GameItem({ image, title, provider }: props) {
  return (
    <div className={style.gameItem}>
      <Image
        className={style.image}
        src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${image}.webp`}
        width={50}
        height={50}
        alt=""
      />
      <div className={style.titleBlock}>
        <span className={style.title}>{title}</span>
        <span className={style.provider}>{provider}</span>
      </div>
    </div>
  );
}
