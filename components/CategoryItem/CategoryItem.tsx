import style from "./CategoryItem.module.scss";

interface props {
  name: string;
}

export default function CategoryItem({ name }: props) {
  return <div className={style.item}>{name}</div>;
}
