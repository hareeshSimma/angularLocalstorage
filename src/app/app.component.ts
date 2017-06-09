
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'

})
export class AppComponent {
  title = 'app';
  submitted:boolean;
  user:User;
  obj:any[];
  getuser:any[];
  user1:any;
  user2:any;
  constructor()
  {
    this.submitted=false;
    this.getuser=[];
    this.user2=[];
    this.user={
      name:"",
      id:undefined,
      num:undefined
    }
  }
  click1()
  {
  var luser={name:this.user.name,id:this.user.id,num:this.user.num};
  var x = [];
  
    var user1 = JSON.parse(localStorage.getItem('luser'));
    if(user1.length){
      x = user1;
      x.push(luser)
      localStorage.setItem('luser', JSON.stringify(x));
    // alert("users set to local storage");
     }
    else{
     
      x.push(luser);
      
      localStorage.setItem('luser', JSON.stringify(x));
    }
    
  
  }
  click2()
  {
    this.submitted=true;
    var user1 = JSON.parse(localStorage.getItem('luser'));
    
    // var user1=JSON.parse(getuser);
    // getuser.push(user1);
    // console.log(JSON.parse(getuser));
    // console.log(localStorage.length);
    for(var i=0;i<user1.length;i++)
    {
      this.user2.push(user1[i]);
      // console.log(user1[i]);
    }
       
    
        // console.log(localStorage.getItem(name));
       
  
 
}
}
interface User
{
  name:String;
  id:Number;
   num:Number;
}
