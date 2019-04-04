import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search, Video, User, TechList } from '../dtos/dashboard.dtos';
import { LangListInfoType } from '../types/dashboard.types';
import { USERS } from '../mocksData/users';
import { PLAY_LISTS } from '../mocksData/playlists';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    searchForm: FormGroup;
    techList: Video[];
    userTechList: TechList[];
    userList: User[];
    techListInfo = new LangListInfoType();
    techGraphInfo = new LangListInfoType();
    constructor(
        private fb: FormBuilder
    ) {
        this.userList = USERS;
        this.userTechList = PLAY_LISTS;
    }

    ngOnInit(): void {
        this.searchForm = this.fb.group({
            name: ['', [Validators.required]],
            user: ['', [Validators.required]]
        });
        this.defaultTechInfo();
    }

    // Setting default values for list and Graph component
    public defaultTechInfo(): void {
        this.techList = [];
        this.userTechList.forEach(list => {
            this.techList = this.techList.concat(list.videos);
        });
        this.buildInfoObj(this.listSort(this.techList), null);
    }

    // Setting values for list and Graph component after form submit
    public onSubmit({ value, valid }: { value: Search, valid: boolean }): void {
        let pID = this.userList.find(u => u.id === Number(value.user)).playlistID;
        this.techList = this.userTechList.find(l => l.id === pID).videos;
        this.buildInfoObj(this.techList, value.name);
    }

    // build input objects for list and Graph component
    public buildInfoObj(arrayOfObject: Video[], term: string) {
        let videos = [];
        if (term === null) {
            videos = arrayOfObject;
        } else {
            videos = arrayOfObject.filter(a => {
                if (a.title.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        this.buildListObj(videos, term);
        this.buildGraphObj(videos, term, 6);
    }

    // build list object
    public buildListObj(videos: Video[], term: string): void {
        this.techListInfo.name = term;
        this.techListInfo.totalTime = this.getTotalTime(videos);
        this.techListInfo.videos = videos;
    }

    // build graph object
    public buildGraphObj(videos: Video[], term: string, count: number): void {
        this.techGraphInfo.count = count;
        this.techGraphInfo.name = term;
        this.techGraphInfo.videos = videos.slice(0, 6);
    }

    // get formatted time for list object
    public getTotalTime(videos: Video[]): string {
        let totalTime = '';
        let secs = 0;
        videos.forEach(v => {
            let peices = v.time.split(':');
            if (peices.length === 1) {
                secs += Number(peices[0]);
            } else {
                secs += Number(peices[0]) * 60 + Number(peices[1]);
            }
        });
        let hours = Math.floor(secs / 3600);
        secs %= 3600;
        let minuts = Math.floor(secs / 60);
        let seconds = secs % 60;
        totalTime = hours + ' hours, ' + minuts + ' minuts, ' + seconds + ' seconds';
        return totalTime;
    }

    // sort list
    public listSort(videos: Video[]): Video[] {
        if (videos.length > 0) {
            videos.sort((a, b) => {
                return Number(b.time.replace(':', '.')) - Number(a.time.replace(':', '.'));
            });
        }
        return videos;
    }
}
