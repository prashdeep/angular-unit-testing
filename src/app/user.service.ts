import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  getUsers(): Array<{}> {
    return [
        {
            name: 'Vinay',
            surname: 'Kumar'
        },
        {
            name: 'Ram',
            surname: 'Kumar'
        }
    ];
}

}
