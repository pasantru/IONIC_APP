import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeinePage } from '../peine/peine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users = []

  constructor(public navCtrl: NavController) {
    this.getRequest();
  }
  getRequest() {
    fetch('https://my-json-server.typicode.com/dluque92/HW2018/users', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(this.errorHandler)
      .then(res => {
        //Succesful response
        console.log(res)
        var superheroes = []
        for (var i = 0; i < res.length; i++) {
          superheroes.push({
            superhero: res[i].superhero,
            publusher: res[i].publisher,
            alterego: res[i].alter_ego,
            first_apperence: res[i].first_apperence,
            characters: res[i].characters,
            picture: res[i].picture
          })
          this.users = superheroes;
        }
      })
      .catch(err => {
        //unsuccesfull
        console.error(err)
      },
    )
  }
  errorHandler = (res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(res.statusText)
    }
  }
  sendParam(user){
    this.navCtrl.push(PeinePage, {
      superhero: user.superhero,
      publisher: user.publisher,
      alterego: user.alterego,
      first_apparence: user.first_apparence,
      characters: user.characters,
      picture: user.picture 
    });
  }
}
