import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/Interfaces/Users/new-user';
import { LoginService } from 'src/app/Services/UserServices/login.service';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signUpForm: FormGroup;



  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username' : new FormControl(null),
      'password' : new FormControl(null),
      'phone' : new FormControl(null),
      'email' : new FormControl(null),
      'academicLevel' : new FormControl(null)
    })
  }

}
