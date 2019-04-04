import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LangListInfoType } from '../../types/dashboard.types';
@Component({
    selector: 'app-lang-list',
    templateUrl: './lang-list.component.html',
    styleUrls: ['./lang-list.component.scss']
})
export class LangListComponent implements OnInit {
    @Input() techListInfo = new LangListInfoType();

    constructor(

    ) {
    }

    ngOnInit() {

    }
}
