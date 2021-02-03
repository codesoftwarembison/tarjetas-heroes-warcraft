import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage=`url('https://i.ytimg.com/vi/8ygfh7Yulag/maxresdefault.jpg')`
    body.style.backgroundSize='100% 100%'
    body.style.backgroundRepeat='no-repeat'
    body.style.backgroundAttachment='fixed'
   }

  ngOnInit(): void {
  }

}
