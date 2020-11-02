import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent } from './app.component'
import { EnfantComponent} from './enfant/enfant.component';

// de quoi est composé Angular? 

@NgModule({
    declarations: [ // c'est ici que l'on rajoute les composants
        AppComponent,
        EnfantComponent
    ],
    imports: [ // c'est ici que l'on rajoute les modules (il faut que tout éléments finissent par MODULE)
        BrowserModule

    ],
    providers: [], // c'est pour les services
    bootstrap: [AppComponent]  // Le composant principal (Parent de tout composant)
})

export class AppModule {}