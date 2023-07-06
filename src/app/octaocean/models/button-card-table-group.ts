import { ButtonCardTable } from "./button-card-table"

export interface ButtonCardTableGroup {
  cardsPerRow: number,
  title: string,
  subtitle: string,
  cards: Array<ButtonCardTable>,
  buttonName: string,
  buttonUrl: string
  buttonIcon: string,
}