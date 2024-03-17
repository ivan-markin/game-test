import { API } from "@/app/api";
import { IGame } from "@/interfaces/game.interface";

export const getGames = async (): Promise<IGame[]> => {
  const res = await fetch(API.games);
  return res.json();
};
