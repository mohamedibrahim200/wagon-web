import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users, patterns } from '../../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  screenToGo = "";
  myformGroup: any;
  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.route.params.subscribe(e => {
      this.screenToGo = e['screen']?? "";
    })

    this.myformGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.pattern(patterns.passwordPattern)])
    })
  }
  submit() {
    if(this.myformGroup.valid){
      let user = Users.find((x: any) => x.email.toLowerCase() == this.myformGroup.value.email.toLowerCase() && x.password == this.myformGroup.value.password);
      if (user){
        localStorage.setItem('UserData', JSON.stringify(user));
        if(this.screenToGo) this.router.navigate([this.screenToGo]);
        else this.router.navigate(['Home']);
        
      }
    }else{
      Object.keys(this.myformGroup.controls).forEach(key => {
        this.myformGroup.controls[key].markAsTouched();
      })
    }
  }
    
}
