import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeColorClassService } from 'src/app/services/change-color-class-service';
import { HeroesService } from 'src/app/services/heroes-service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {

  _heroe: any = {};

  constructor(private router: ActivatedRoute,
    private serviceHeroe: HeroesService,
    public serviceClass: ChangeColorClassService) {
    //Obtiene parametros enviados por la url
    this.router.params.subscribe(params => {
      this._heroe = this.serviceHeroe.GetHeroe(params['id'])
      let body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = `url('${this._heroe.img}')`
      body.style.backgroundSize = '100% 100%'
      body.style.backgroundRepeat = 'no-repeat'
      body.style.backgroundAttachment = 'fixed'
      window.scroll(0, 0);
    })

  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = ``
  }

}
