import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBidingComponent } from './shared/component/pages/data-biding/data-biding.component';
import { TodoListComponent } from './shared/component/pages/todo/todo-list/todo-list.component';
import { UserFormComponent } from './shared/component/pages/users/user-form/user-form.component';
import { UsersListComponent } from './shared/component/pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'form/:id', component: UserFormComponent },
  { path: 'data-binding', component: DataBidingComponent },
  { path: 'todo', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
