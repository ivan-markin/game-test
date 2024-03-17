"use client";

import { usePathname, useRouter } from "next/navigation";
import style from "./AllGamesButton.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllGamesButton() {
  const [isVisible, setVisible] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/games") {
      setVisible(false);
    } else setVisible(true);
  }, [pathName]);

  return (
    <>
      {isVisible && (
        <Link href={"/games"} className={style.btn}>
          All games
        </Link>
      )}
    </>
  );
}
