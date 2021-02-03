import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeroesService } from 'src/app/services/heroes-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  inputValue: string = '';

  constructor(private serviceHero: HeroesService,
    private router: Router,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {


  }

  GetHeroeSearch(name: string) {

    this.inputValue = ''
    let index = this.serviceHero.GetHeroeSearch(name)
    if(index!==undefined)
    this.toastr.success("Heroe encontrado")
    else
    this.toastr.error("Heroe no encontrado")

   this.router.navigate(['heroe', index]);

  }
}