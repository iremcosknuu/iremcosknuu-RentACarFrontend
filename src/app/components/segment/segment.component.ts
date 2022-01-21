import { SegmentService } from './../../services/segment.service';
import { Component, OnInit } from '@angular/core';
import { SegmentListModel } from 'src/app/models/segmentListModel';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {

  segments:SegmentListModel[]=[]
  dataLoaded = false

  constructor(private segmentService:SegmentService) { }

  ngOnInit() {
    this.getSegments()
  }

  getSegments(){
    this.segmentService.getSegments().subscribe(response =>{
      this.dataLoaded = false
      this.segments = response.data
      this.dataLoaded = true
    })
  }

}
