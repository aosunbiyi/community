import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ForumsComponent } from "./forums/forums.component";
import { ForumComponent } from './forum/forum.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';

const forumRoutes: Routes = [
  { path: 'forums', component: ForumsComponent },
  {
    path: 'forums/:forum_alias', component: ForumComponent,
    children: [
      { path: '', component: ThreadsComponent },
      { path: ':thread_alias', component: ThreadComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(forumRoutes)
  ],
  declarations: [ForumsComponent, ForumComponent, ThreadsComponent, ThreadComponent]
})
export class ForumsModule { }
