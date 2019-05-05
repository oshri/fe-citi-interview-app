import { Injectable, OnInit } from '@angular/core';
import { USERS } from '../mocksData/users';
import { PLAY_LISTS } from '../mocksData/playlists';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CourseService implements OnInit {
  formdata: FormData;
  public subject = new Subject();
  public timeFormatSubject = new Subject();
  public courseValue = new Subject();

  constructor(private http:HttpClient) { }
   
  ngOnInit() {
      
  }

  onGetUsers() {
    return USERS;
  }

  onGetPlaylists() {
    return PLAY_LISTS;
  }


  onFilterTech(techName,ind) {
    let videos = this.onGetPlaylists()[ind].videos;
    return videos.filter((value)=> {
      if(value.title === techName) {
        return value.title;
      }
      if(techName) {
      let techLength = techName.length;
      if(value.title.substring(0,techLength) === techName) {
        return value.title;
      }
    }
    })
  }
}
