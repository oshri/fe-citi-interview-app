import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {
  public playListVideos;
  courseName: {};
  shoMsg: boolean;
  threePlace: any;
  twoPlace: string;
  timeLength: any;
  selectCourse: boolean;
  public timeFormatValue;
  public borderVal = false;

  constructor(private courseService: CourseService) {
   }
 
  ngOnInit() {
    this.courseService.courseValue.subscribe(data => {
      this.courseName = data;
    })

    this.courseService.timeFormatSubject.subscribe((data) => {
      this.timeFormatValue = data;
      if (this.timeFormatValue) {
        this.timeLength = this.timeFormatValue.split(":").length;
        let timeAr = this.timeFormatValue.split(":");
        if (timeAr.length === 3) {
          let hrs = `${timeAr[0].split("")[0] == "0" ? timeAr[0].split("").pop() : timeAr[0]}`
          let mins = `${timeAr[1].split("")[0] == "0" ? timeAr[1].split("").pop() : timeAr[1]}`
          let secs = `${timeAr[2].split("")[0] == "0" ? timeAr[2].split("").pop() : timeAr[2]}`
          if (timeAr[1].length > 1 && timeAr[2].length > 1) {
            this.threePlace = `${hrs} hour, ${mins} minutes, ${secs} seconds`
          }
          if (timeAr[1].length == 1 && timeAr[2].length == 1) {
            this.threePlace = `${hrs} hour, ${mins} minute, ${secs} second`
          }
        }
        if (timeAr.length === 2) {
          let mins = `${timeAr[0].split("")[0] == "0" ? timeAr[0].split("").pop() : timeAr[0]}`
          let secs = `${timeAr[1].split("")[0] == "0" ? timeAr[1].split("").pop() : timeAr[1]}`
          if (timeAr[0].length > 1 && timeAr[1].length > 1) {
            this.twoPlace = `${mins} minutes, ${secs} seconds`
          }
          if (timeAr[0].length == 1 && timeAr[1].length == 1) {
            this.twoPlace = `${mins} minute, ${secs} second`
          }
        }
      }
    })
    
    if(this.playListVideos === undefined) {
      this.selectCourse = true;
    } 

    this.courseService.subject.subscribe((data) => {
      this.playListVideos = data;
      if(this.playListVideos) {
        this.selectCourse = false;
      }
      if (this.playListVideos.length === 0) {
        this.shoMsg = true
      } else {
        this.shoMsg = false;
      }
    });
  }
}
