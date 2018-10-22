import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { Board } from '../_models/board';
import { GameboardComponent } from '../gameboard/gameboard.component';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit, AfterViewInit {
    size = 8;
    flips = 7;
    formGroup: FormGroup;
    @ViewChild(GameboardComponent)
    gameboard: GameboardComponent;
    currentUser: User;
    users: User[] = [];
    board: Board;

    constructor(private userService: UserService, fb: FormBuilder) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.board = new Board(this.size);

    }

    ngAfterViewInit() {
        this.gameboard.flipRandom(this.flips);
    }

    onSubmit() {
        this.gameboard.dbBoard = new Board(this.size);
        this.gameboard.flipRandom(this.flips);
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers();
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
