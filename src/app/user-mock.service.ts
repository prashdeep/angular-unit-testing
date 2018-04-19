import { Injectable } from '@angular/core';

@Injectable()
export class UserMockService {

  constructor() { }

  getUsers(): Array<{}> {
    return [
        {
            name: 'test',
            surname: 'testUser'
        },
        {
          name: 'test',
          surname: 'testUser'
      }
    ];
}
}
