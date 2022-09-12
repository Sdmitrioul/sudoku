import { ListOfNine, Maybe } from './interfaces'

export type Board = ListOfNine<ListOfNine<Cell>>

export type Cell = Maybe<CellWithValue | PossibleCellValue>

export type CellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type PossibleCellValue = ListOfNine<Maybe<CellValue>>

export interface CellWithValue {
  value: CellValue
  isGenerated?: boolean
}
