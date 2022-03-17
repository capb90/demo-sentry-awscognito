import { Component, OnInit } from '@angular/core';
import { Auth, API } from 'aws-amplify';
import { from } from 'rxjs';
@Component({
  selector: 'amplify-app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    const token = localStorage.getItem('tokenProb')
    const apiName = 'AdminQueries'
    const path = '/getUser'
    const data = {
      queryStringParameters:{
        username:'ca.portillo'

      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: token
      } 
     
    }
    from(API.get(apiName,path,data)).subscribe((response)=>{
      console.log('RESPUESTA',response)
    })
  }

  upDateUser(){
    
    const token = localStorage.getItem('tokenProb')
    const apiName = 'AdminQueries'
    const path = '/updateUserAttributes'
    const data = {
      body:{
        username:'ca.portillo',
        userAttributes:[
          {
            Name: "profile",
            Value: "stock'holder"
          },

          
        ]
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: token
      } 
     
    }
    from(API.post(apiName,path,data)).subscribe((response)=>{
      console.log('RESPUESTA',response)
    })
  }

}
