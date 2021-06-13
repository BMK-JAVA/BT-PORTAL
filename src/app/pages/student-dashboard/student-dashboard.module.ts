import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import {StudentDashboardRoutingModule} from './student-dashboard-routing.module';
import {StudentWsModule} from '../student-ws/student-ws.module';
import {MatTabsModule} from '@angular/material/tabs';
import { TodayLessonsComponent } from './today-lessons/today-lessons.component';
import { MyLessonsListComponent } from './my-lessons-list/my-lessons-list.component';



@NgModule({
  declarations: [
    StudentDashboardComponent,
    TodayLessonsComponent,
    MyLessonsListComponent
  ],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    StudentWsModule,
    MatTabsModule
  ],
  exports: [
    TodayLessonsComponent,
    MyLessonsListComponent
  ]
})
export class StudentDashboardModule { }
