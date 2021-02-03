import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/Interfaces/heroe';
import { ChangeColorClassService } from 'src/app/services/change-color-class-service';
import { HeroesService } from 'src/app/services/heroes-service';
import { InyectionScriptService } from 'src/app/services/inyection-javascript-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heores: Heroe[] = []
  search: boolean = false

  constructor(
    private _heroes: HeroesService, 
    private elementRef: ElementRef,
    private script:InyectionScriptService,
    public serviceClass:ChangeColorClassService) { 

    this.script.Load(["card-3d.js"])
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage=`url('https://wallpaperaccess.com/full/827467.jpg')`
    body.style.backgroundSize='100% 100%'
    body.style.backgroundRepeat='no-repeat'
    body.style.backgroundAttachment='fixed'
  }

  ngOnInit(): void {
    this.heores = this._heroes.GetHeroes().sort();

  }

}
