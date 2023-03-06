import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

        data="your perfect banking partner"
        data1="branch"

        //acno=""
        //--or--

        acno:any
        pswd:any



  userDetails:any={
             1000:{username:"anu",acno:1000,password:"abc1000",balance:0},
             1001:{username:"abhi",acno:1001,password:"abc1001",balance:0},
             1002:{username:"aju",acno:1003,password:"abc1002",balance:0},
             1003:{username:"kukku",acno:1003,password:"abc1003",balance:0}
  }

  login(){
    var acnum=this.acno
    var psw=this.pswd
    var userDetails=this.userDetails

    if(acnum in userDetails)
    {
      if(psw==userDetails[acnum]["password"])
      {
        alert("login success")
      }
      else
      {
        alert("incorrect password")
      }
    }
    else
    {
      alert("incorrect account no")
    }
  }

  acnoChange(event:any){

    this.acno=event.target.value

    //console.log(this.acno);
    
    

  }

  passwordChange(event:any){

   this.pswd=event.target.value
   //console.log(this.pswd);

  }

}
