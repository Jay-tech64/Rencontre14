import { Component } from '@angular/core';

@Component({
    selector: 'component1', //C'est ça qui exécute le HTML associé
    template: `
        <h1> {{titrePrincipale}} </h1>
        <hr/>
        <enfant [tabOfObjectFromParent]="seminaire"
            (retour)="reception($event)"
            
        >
        </enfant>
        
    `,
    styles: [`
         h1 { color: red}
         h2 { color: green}
        `
    ]
        
    
})

export class AppComponent {
    titrePrincipale="Liste des Meetups";

    seminaire = [
        {
            id: 1,
            name: 'Conception UML',
            date: '25/10/2020',
            time: '09.00 AM',
            donation: 35.50,
            imageUrl: 'assets/images/',
            address: {
                street: '123 rue toto',
                city: 'Mtl',
                country: 'Canada'
            } 
        },
        {
            id: 2,
            name: 'Programmation WebService',
            date: '25/10/2020',
            time: '09.00 AM',
            donation: 35.50,
            imageUrl: 'assets/images/',
            address: {
                street: '123 rue toto',
                city: 'Mtl',
                country: 'Canada'
            } 
        },
        {
            id: 3,
            name: 'Methodologie Agile',
            date: '25/10/2020',
            time: '09.00 AM',
            donation: 35.50,
            imageUrl: 'assets/images/',
            address: {
                street: '123 rue toto',
                city: 'Mtl',
                country: 'Canada'
            } 
        },
    ]

    reception(data){
        console.log("Recu: ", data);
    }
}

// Interpolation {{ }}