import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LangListInfoType } from '../../types/dashboard.types';
import { Video } from '../../dtos/dashboard.dtos';
@Component({
    selector: 'app-graph-list',
    templateUrl: './graph-list.component.html',
    styleUrls: ['./graph-list.component.scss'],
})
export class GraphListComponent implements OnInit {
    @Input() techListInfo = new LangListInfoType();
    constructor(
    ) {
    }
    ngOnInit() {
    }
}
