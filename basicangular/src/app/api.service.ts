import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  insertData(data){
    console.log(data);
    return this.http.post("http://localhost:3002/readApi",data);
  }
  getData()
  {
    return this.http.get("http://localhost:3002/viewApi");

  }
  searchData(data)
  {
    return this.http.post("http://localhost:3002/searchApi",data);
  }
  
  editData(data)
  {
    return this.http.post("http://localhost:3002/updateApi",data);
  }
  deleteData(data)
  {
    return this.http.post("http://localhost:3002/delApi",data);
  }

}
