import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

  @Input()
  users!: User[];
  @Output()
  userChanged: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  refresh() {
    this.router.navigate(['/users']).then(
      () => {
        console.log('refresh');
      }
    );
  }

  addUser(): void {
    this.router.navigate(['/add-user']).then(
      () => {
        console.log('add user');
      }
    );
  }
  userDeleted(user: User): void {
    this.userChanged.emit(user);
  }
}

