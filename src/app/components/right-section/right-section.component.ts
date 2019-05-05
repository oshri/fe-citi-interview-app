import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent implements OnInit {
  newList;
  newAr = [];
  finalVideoAr = [];
  sortedVdolist: any;
  constructor(private courseService:CourseService) { }
  public countAr = [];
  public countValue = 0;

  ngOnInit() {
    for(var i=0;i<=9;i++) {
      this.countAr.push(i);
    }
  
    this.courseService.subject.subscribe((data:any)=> {
      let newVideoList = JSON.parse(JSON.stringify(data));
        this.sortedVdolist = newVideoList.sort((a,b)=> {
          return b.time.split(":")[0]-a.time.split(":")[0];
        });
    })
  }

}
