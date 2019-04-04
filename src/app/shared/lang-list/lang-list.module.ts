import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangListComponent } from './lang-list.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [LangListComponent],
    exports: [LangListComponent]
})
export class LangListModule { }
