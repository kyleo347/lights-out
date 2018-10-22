import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Board } from '../_models/board';

@Injectable()
export class BoardService {
    constructor(private http: HttpClient) { }

    getAll(userid: number) {
        return this.http.get<Board[]>(`${environment.apiUrl}/boards` + userid);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/boards/` + id);
    }

    create(board: Board) {
        return this.http.post(`${environment.apiUrl}/boards/create`, board);
    }

    update(board: Board) {
        return this.http.put(`${environment.apiUrl}/boards/` + board.id, board);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/boards/` + id);
    }
}
