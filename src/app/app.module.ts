import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CourseListComponent } from './course/course-list.component'
import { CourseDetailComponent } from './course/course-detail.component'
import { GlobalChatComponent } from './chat/global-chat.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, CourseListComponent, CourseDetailComponent, GlobalChatComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
