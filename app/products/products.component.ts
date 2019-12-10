import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../user-information.service';
import{ profileUser } from '../shared/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private userInformationService:UserInformationService,
    private router:Router) { }
   userList:profileUser[];
  ngOnInit() {
  this.userInformationService.getUsers().subscribe(
    (response:profileUser[])=>{
    //console.log(response);
    this.userList=response;
    console.log(this.userList);
    }
  );
  
  }
  userDetails(person:profileUser){
    this.router.navigate(['/details',person.login]);
  }

}
