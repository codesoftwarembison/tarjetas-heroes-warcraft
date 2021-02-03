import { Component, OnInit } from '@angular/core';
import { InyectionScriptService } from 'src/app/services/inyection-javascript-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private script:InyectionScriptService) {
    script.Load(["text-change.js"])
    let movil = window.matchMedia("(max-width: 425px)")
    this.myFunction(movil)
   }

  ngOnInit(): void {
   
  }

   myFunction(x:any) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundImage=`url('https://media4.giphy.com/media/psmk2jPQD9SehTG3bE/giphy.gif')`
      document.body.style.backgroundSize='100% 100%'
      document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundAttachment='fixed'

    } else {
      document.body.style.backgroundImage=`url('https://wallpaperaccess.com/full/1656056.jpg')`
      document.body.style.backgroundSize='100% 100%'
      document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundAttachment='fixed'
    }
  }

}
