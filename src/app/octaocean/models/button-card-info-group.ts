import { ButtonCardInfo } from "./button-card-info";

export interface ButtonCardInfoGroup {
  title: string,
  buttonName: string,
  buttonUrl: string,
  cardsPerRow: number,
  cards: Array<ButtonCardInfo>,
}