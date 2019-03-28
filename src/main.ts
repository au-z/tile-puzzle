import Board from './Board'

const targetState: number[] = [
	1, 2, 3,
	4, 5, 6,
	7, 8, 0
]

const startingState: number[] = [
	7, 1, 0,
	6, 8, 4,
	5, 3, 2
]

const board = new Board(3, startingState)
console.log(board.manhattanDistance(targetState))

