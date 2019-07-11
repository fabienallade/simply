import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  data=""
  user:Object={
    email:"",
    password:""
  }
  constructor(private api:ApiServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user)
    this.api.store(this.user)
    .subscribe(
      (response)=>{
        console.log(response)
        this.data="Vous vous etes connectez avec success";
      },
      (error)=>{
        console.log(error)
        this.data=error._body;
      }
    );
  }

}
