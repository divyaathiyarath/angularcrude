import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  getName='';
  getMailid='';
  getPhone='';
  getmessage='';

  onSubmit(data:NgForm)
  {
  this.apiService.insertData(data.value).subscribe((response)=>
  {
    console.log(response);
    alert("Successfully inserted");
  })
   }
  

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}
