import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public playLists;
  public userList;
  public indexValue;
  public userName;
  public selectedCourse;
  public totalMins = 0;
  public totalSecs = 0;
  public playListsData;
  public totalTime;
  timeFormat: string;
  allSecs;
  public fg : FormGroup;
  btnDisabled = true;
  valued = "";
  selectDisabled = true;

  constructor(private courseService: CourseService) {
  }


  onSearch() {
    let index = this.indexValue;
    let techname = this.selectedCourse;
    this.playListsData = this.courseService.onFilterTech(techname, index);
    this.courseService.subject.next(this.playListsData);
    this.courseService.courseValue.next(this.selectedCourse);
  }

  onGetTotalTime() {
    this.playListsData.forEach((v) => {
      if (v.time.split(":")[0]) {
        this.totalMins += parseInt(v.time.split(":")[0]);
        if (v.time.split(":")[1]) {
          this.totalSecs += parseInt(v.time.split(":")[1]);
        }
      }
    });
    this.allSecs = ((this.totalMins * 60) + this.totalSecs);
    let sec_num = parseInt(this.allSecs, 10);
    let hours = Math.floor(sec_num / 3600) % 24;
    let minutes = Math.floor(sec_num / 60) % 60;
    let seconds = sec_num % 60;

    this.timeFormat = [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i > 0)
      .join(":")
    this.allSecs = 0;
    this.courseService.timeFormatSubject.next(this.timeFormat);
    this.totalMins = 0;
    this.totalSecs = 0;
  }

  onEnter(e) {
   this.valued = e.target.value;
  this.valued =  this.valued.replace(e.target.value.charAt(0),e.target.value.charAt(0).toUpperCase());
    if(this.fg.status === "INVALID") {
      this.btnDisabled = true;
    } else {
      this.btnDisabled = false;
    }
  }

  onSelect(e) {
    this.selectedCourse = e.target.value;
  }

  onChange(e) {
    this.selectDisabled = false;
       this.userName = e.target.value;
    this.indexValue = e.target.selectedIndex;
  }
  selectedItem ="Select"
  ngOnInit() {
    this.fg = new FormGroup({
      search : new FormControl("",[Validators.required,Validators.minLength(3)]),
      users: new FormControl("Select",Validators.required)
    });
    this.indexValue = 0;
    this.playLists = this.courseService.onGetPlaylists();
    this.userList = this.courseService.onGetUsers();
  }

}
