import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export  class ChangeColorClassService {
    constructor() { }

     ClassColorNeon(race: string) {
        switch (race) {
            case "Humano":
                return "neon-yellow"
            case "Demonio":
                return "neon-green"
            case "Muerto":
                return "neon-blue"
            default:
                return ""
        }
    }

     ClassColorBorder(race: string) {
        switch (race) {
            case "Humano":
                return "neon-border-yellow"
            case "Demonio":
                return "neon-border-green"
            case "Muerto":
                return "neon-border-blue"
            default:
                return ""
        }
    }

     ClassColorButtom(race: string) {
        switch (race) {
            case "Humano":
                return ""
            case "Demonio":
                return "btn-outline-success"
            case "Muerto":
                return "btn-outline-primary"
            default:
                return ""
        }
    }
    
    ChangeColorBtn(race: string) {
        switch (race) {
            case "Humano":
                return "btn btn-outline-warning"
            case "Demonio":
                return "btn btn-outline-success"
            case "Muerto":
                return "btn btn-outline-primary"
            default:
                return ""
        }
    }


}