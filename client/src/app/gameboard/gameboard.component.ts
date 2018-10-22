import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Board } from '../_models/board';
import { Tile } from '../_models/tile';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from './successdialog.component';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  id: number;
  name: string;
  userid: number;
  data: Tile[][];
  boardWidth: string;
  @Input() size: number;
  @Input() board: Board;

  constructor(public dialog: MatDialog, private el: ElementRef) { }

  openDialog(msg: string): void {
    this.dialog.open(SuccessDialogComponent, {
      width: '250px',
      data: msg,
    });
  }

  ngOnInit() {
    this.dbBoard = this.board;
    this.boardWidth = this.el.nativeElement.offsetWidth;
  }

  public get dbBoard(): Board {
    this.board.name = this.name;
    this.board.data = [];
    for (let x = 0; x < this.data.length; x++) {
      const row = [];
      for (let y = 0; y < this.data[x].length; y++) {
        row.push(this.data[x][y].value);
      }
      this.board.data.push(row);
    }
    return this.board;
  }

  public set dbBoard(board: Board) {
    this.board = board;
    this.id = board.id;
    this.name = board.name;
    this.userid = board.userid;
    if (board && board.data && board.data.length) {
      this.size = board.data.length;
    }
    if (this.size) {
      const table = [];
      for (let x = 0; x < this.size; x++) {
          const row = [];
          for (let y = 0; y < this.size; y++) {
            const val = board && board.data ? board.data[x][y] : false;
            row.push(new Tile(x, y, val));
          }
          table.push(row);
      }
      this.data = table;
    }
  }


  tileColor(tile: Tile) {
    if (tile.value) {
      return 'white';
    }
    return 'black';
  }

  flipTile(clicked: Tile) {
      const x = clicked.x;
      const y = clicked.y;
      clicked.toggle();
      if (x - 1 >= 0) {
        this.data[x - 1][y].toggle();
      }
      if (x + 1 < this.data.length) {
        this.data[x + 1][y].toggle();
      }
      if (y - 1 >= 0) {
        this.data[x][y - 1].toggle();
      }
      if (y + 1 < this.data[0].length) {
        this.data[x][y + 1].toggle();
      }
      if (this.isComplete()) {
        this.openDialog('Challenge complete!');
      }
  }

  flipRandom(flips = 1) {
    for (let i = 0; i < flips; i++) {
      const x = Math.floor(this.size * Math.random());
      const y = Math.floor(this.size * Math.random());
      this.flipTile(this.data[x][y]);
    }
  }

  isComplete() {
    for (let x = 0; x < this.data.length; x++) {
      for (let y = 0; y < this.data[x].length; y++) {
        if (this.data[x][y].value) {
          return false;
        }
      }
    }
    return true;
  }
}
