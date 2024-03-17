"use client";

import { useRouter } from "next/navigation";
import style from "./BackButton.module.scss";
import Image from "next/image";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className={style.btn} onClick={() => router.back()}>
      <Image
        className={style.arrow}
        src={"/back-arrow.svg"}
        width={32}
        height={32}
        alt=""
      />
    </button>
  );
}
