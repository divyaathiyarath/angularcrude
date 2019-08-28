import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 status=false;
 mydata:Array<object>=[];

  constructor(private apiService:ApiService) { }

editFunction()
{
  console.log(this.mydata);
  this.apiService.editData(this.mydata).subscribe((response:any)=>{
    alert("Successfully updated");
   });

}
deleteFunction()
{
  console.log(this.mydata);
  this.apiService.deleteData(this.mydata).subscribe((response:any)=>{
    alert("Successfully deleted");
   });
}





  onSubmit(data:NgForm)
  {

    this.apiService.searchData(data.value).subscribe((response:Array<Object>)=>{
      if(response.length>0)
      {
        this.mydata=response;
        console.log(response);
        this.status=true;

      }




    });

  }

  


  ngOnInit() {
  }

}
