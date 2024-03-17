import BackButton from "@/components/BackButton/BackButton";
import style from "./layout.module.scss";
import AllGamesButton from "@/components/AllGamesButton/AllGamesButton";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={style.layout}>
      <BackButton />
      <AllGamesButton />
      {children}
    </div>
  );
}
