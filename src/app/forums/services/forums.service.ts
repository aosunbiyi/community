import { Injectable } from '@angular/core';
import { Users,Data } from "./data";

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  private _users = Users;
  private _data = Data;

  get forums() {
    return this._data;
  }

  forum(forumAlias: string) {
    return this._data.find(row => {
      return row.alias === forumAlias;
    });
  }

  threads(forumAlias: string) {
    return this._data.find(row => {
      return row.alias === forumAlias;
    }).threads;
  }

  thread(forumAlias: string, threadAlias: string) {
    return this.forum(forumAlias).threads.find(row => {
      return row.alias === threadAlias;
    });
  }

  get users() {
    return this._users;
  }
}
