import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ForumsModule } from "./forums/forums.module";
import { BlogsModule } from "./blogs/blogs.module";

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { AuthGuardService } from "./services/auth-guard.service";
import { UserService } from "./services/user.service";

const appRoutes:Routes=[
  {path:'login', component:LoginComponent},
  {path:'users', component:ChatListComponent, outlet:"chat", canActivate:[AuthGuardService]},
  {path:'blogs',loadChildren:()=> BlogsModule},
  {path:'users/:username', component:ChatComponent, outlet:"chat", canActivate:[AuthGuardService]},
  {path:'', redirectTo:'/forums', pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ChatComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ForumsModule,
    BlogsModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
