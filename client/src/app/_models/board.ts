// import { Tile } from './tile';

export class Board {
    id: number;
    name: string;
    userid: number;
    data: boolean[][];
    size: number;

    // flipTile(clicked: Tile) {
    //     const x = clicked.x;
    //     const y = clicked.y;
    //     clicked.toggle();
    //     if (x - 1 >= 0) {
    //       this.data[x - 1][y].toggle();
    //     }
    //     if (x + 1 < this.data.length) {
    //       this.data[x + 1][y].toggle();
    //     }
    //     if (y - 1 >= 0) {
    //       this.data[x][y - 1].toggle();
    //     }
    //     if (y + 1 < this.data[0].length) {
    //       this.data[x][y + 1].toggle();
    //     }
    // }

    constructor(size = 8) {
      const table = [];
      for (let x = 0; x < size; x++) {
          const row = [];
          for (let y = 0; y < size; y++) {
              row.push(false);
          }
          table.push(row);
      }
      this.data = table;
      this.size = size;
    }

    // flipRandom(flips = 1) {
    //   for (let i = 0; i < flips; i++) {
    //     const x = Math.floor(this.size * Math.random());
    //     const y = Math.floor(this.size * Math.random());
    //     this.flipTile(this.data[x][y]);
    //   }
    // }
}
