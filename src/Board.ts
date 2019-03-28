import Tile from './Tile'

export default class {
	public tiles: Tile[]

	constructor(dim: number = 3, boardConfig: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0]) {
		const boardPos = (idx: number): [number, number] => {
			return [
					idx % 3,
					Math.floor(idx / 3),
			]
		}

		this.tiles = boardConfig.map((t, i) => new Tile(t, i + 1, ...boardPos(i)))
	}

	public findTile(val: number): Tile {
		const tile = this.tiles.find((t) => t.val === val)
		if(!tile) {
			throw new Error('Cannot find undefined tile.')
		}
		return tile
	}

	public manhattanDistance(targetConfig: number[]): number | null {
		const distance = (tile: Tile, target: Tile): number => {
			return Math.abs(target.x - tile.x) + Math.abs(target.y - tile.y)
		}

		try {
			return this.tiles.reduce((acc, t, i) => acc += distance(t, this.findTile(targetConfig[i])), 0)
		} catch (ex) {
			console.error(ex)
		}
		return null
	}
}