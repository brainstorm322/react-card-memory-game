export type GameLocationState = {
  difficulty: number
}

export type GameContextValue = {
  difficulty: number
  isPaused: boolean
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
  iconList: string[]
  setIconList: React.Dispatch<React.SetStateAction<string[]>>
  iconFoundList: string[]
  setIconFoundList: React.Dispatch<React.SetStateAction<string[]>>
  firstSelectedCard: number
  setFirstSelectedCard: React.Dispatch<React.SetStateAction<number>>
  secondSelectedCard: number
  setSecondSelectedCard: React.Dispatch<React.SetStateAction<number>>
}