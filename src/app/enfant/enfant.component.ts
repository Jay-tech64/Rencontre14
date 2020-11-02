import { style } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'enfant',
    templateUrl: "./enfant.component.html",
    styleUrls: ["./enfant.component.css"]
    
})

export class EnfantComponent{
    @Input() tabOfObjectFromParent: any;
    @Input() listeTriee: any;

    @Output() retour = new EventEmitter(); // L'information sera transmise lors d'un évènement (p.e. un click de souris)
    envoie(){
        this.retour.emit(this.tabOfObjectFromParent[1].name)
    }

}