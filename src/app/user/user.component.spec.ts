import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../user.service';
import { UserMockService } from '../user-mock.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserComponent 
      ],
      providers: [
        { provide: UserService, useClass: UserMockService }
    ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance; // UserComponent test instance
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one user`, async(() => {
    expect(component.users.length).toEqual(2);
  }));
});
