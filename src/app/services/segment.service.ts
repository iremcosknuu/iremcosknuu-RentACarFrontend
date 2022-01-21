import { SegmentListModel } from './../models/segmentListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listbox } from 'primeng/listbox';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  apiUrl: string = "http://localhost:8080/api/segments/"

constructor(private httpClient:HttpClient) { }

getSegments():Observable<ListResponseModel<SegmentListModel>>{
  return this.httpClient.get<ListResponseModel<SegmentListModel>>(this.apiUrl+"getall")
}

}
