export class Tile {
    x: number;
    y: number;
    value: boolean;

    constructor(x, y, value = false) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    toggle() {
        this.value = !this.value;
    }
}
