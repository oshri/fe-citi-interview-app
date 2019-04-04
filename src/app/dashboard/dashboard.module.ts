import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LangListModule } from '../shared/lang-list/lang-list.module';
import { GraphListModule } from '../shared/graph-list/graph-list.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        LangListModule,
        GraphListModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
