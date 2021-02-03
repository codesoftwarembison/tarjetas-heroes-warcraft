import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InyectionScriptService {

  constructor() { }

  Load(files:string[]) {
    files.forEach(file => {
      let script = document.createElement("script")
      script.src = `./assets/js/${file}`
      let body = document.getElementsByTagName("body")[0]
      body.appendChild(script)
    })
  }

}
