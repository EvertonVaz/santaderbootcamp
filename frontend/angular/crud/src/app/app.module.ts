import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { UsersListComponent } from './shared/component/pages/users/users-list/users-list.component';
import { UserFormComponent } from './shared/component/pages/users/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBidingComponent } from './shared/component/pages/data-biding/data-biding.component';
import { ButtonComponent } from './shared/component/button/button.component';
import { LifeCycleComponent } from './shared/component/life-cycle/life-cycle.component';
import { TodoItemComponent } from './shared/component/pages/todo/todo-item/todo-item.component';
import { TodoListComponent } from './shared/component/pages/todo/todo-list/todo-list.component';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './shared/component/pages/pipes/pipes.component'
import { UpperCasePipe } from '@angular/common';

MatCardModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserFormComponent,
    DataBidingComponent,
    ButtonComponent,
    LifeCycleComponent,
    TodoItemComponent,
    TodoListComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
