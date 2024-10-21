import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { CourseListComponent } from './course/course-list.component'
import { CourseDetailComponent } from './course/course-detail.component'
import { GlobalChatComponent } from './chat/global-chat.component'

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'chat', component: GlobalChatComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
