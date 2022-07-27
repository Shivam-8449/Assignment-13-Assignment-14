import {Component, EventEmitter, Input, Output} from '@angular/core';
import { User, Role } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'tr[app-user-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent {

  @Input()
  user!: User;
  @Output()
  userChanged: EventEmitter<User> = new EventEmitter<User>();

  role = Role;

  editMode: boolean = false;

  constructor(private userService: UserService) {
  }

  edit() {
    this.editMode = true;
  }

  async delete() {
    await this.userService.deleteUser(this.user.id).subscribe(
      () => {
        this.userChanged.emit(this.user);
      }
    );
  }

  async save() {
    this.editMode = false;
    await this.userService.updateUser(this.user).subscribe(
      () => {
        this.userChanged.emit(this.user);
      }
    );
  }

  cancel() {
    this.editMode = false;
  }

}
