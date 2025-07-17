import { Component } from '@angular/core';
import { Stanza } from './types/stanze.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prenotazione-stanze';

  stanze: Stanza[] = [
    { 
      id: 1, 
      tipologia: "singola", 
      descrizione: "Stanza singola non finestrata", 
      prezzo: 70 
    },
    { 
      id: 2, 
      tipologia: "singola", 
      descrizione: "Stanza singola vista piscina", 
      prezzo: 50 
    },
    { 
      id: 3, 
      tipologia: "doppia", 
      descrizione: "Stanza doppia matrimoniale", 
      prezzo: 80 
    },
    { 
      id: 4, 
      tipologia: "tripla", 
      descrizione: "Stanza tripla con matrimoniale e letto singolo", 
      prezzo: 140 
    },
    { 
      id: 5, 
      tipologia: "doppia", 
      descrizione: "Stanza doppia con due letti singoli", 
      prezzo: 80 
    },
    { 
      id: 6, 
      tipologia: "tripla", 
      descrizione: "Stanza tripla con tre letti singoli", 
      prezzo: 120 
    }
  ]

  stanzePrenotate: Stanza[] = [];

  creaPrenotazione(stanza: Stanza): void {
    this.stanzePrenotate.push(stanza);
    this.stanze.splice(this.stanze.indexOf(stanza), 1);
  }

  incassoTotale(): number {
    let incasso: number = 0;
    for (let stanza of this.stanzePrenotate) {
      incasso += stanza.prezzo;
    }
    return incasso;
  }

  rimuoviPrenotazione(stanza: Stanza): void {
    this.stanzePrenotate.splice(this.stanzePrenotate.indexOf(stanza), 1);
    this.stanze.push(stanza);
  }
}