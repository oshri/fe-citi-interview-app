import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphListComponent } from './graph-list.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [GraphListComponent],
    exports: [GraphListComponent]
})
export class GraphListModule { }
