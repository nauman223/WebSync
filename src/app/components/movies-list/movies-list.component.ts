import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootData, SubmitData } from "../../modal/movies";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public url = environment.apiUrl;
  dataList: RootData[] = [];
  submiteddData: SubmitData = {
    id: "",
    customer_id: "",
    name: "",
    description: "",
    street: "",
    postal_code: "",
    city: "",
    start_date: "",
    end_date: ""

  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.getData().subscribe(res => {
      console.log(`res`, res[0]);
      this.dataList = res[0]
    })

  }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + `/enterworker/api/admin/projects`);
  }
  postData(data: SubmitData): Observable<any> {
    return this.httpClient.post<any>(this.url + `/enterworker/api/admin/projects`, data);
  }

  submitData = () => {
    console.log(`submiteddData`, this.submiteddData)
    if (this.submiteddData.city &&
      this.submiteddData.customer_id &&
      this.submiteddData.description &&
      this.submiteddData.end_date &&
      this.submiteddData.id &&
      this.submiteddData.name &&
      this.submiteddData.postal_code &&
      this.submiteddData.start_date &&
      this.submiteddData.street) {

      this.postData(this.submiteddData).subscribe(res => {
        console.log(`res`, res)
      })

    }
  }

}
