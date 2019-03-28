export default class Tile {
	public val: number
	public targetVal: number
	public x: number
	public y: number

	constructor(val: number, targetVal: number, x: number, y: number) {
		this.val = val
		this.targetVal = targetVal
		this.x = x
		this.y = y
	}
}