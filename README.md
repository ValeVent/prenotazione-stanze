# Progetto Prenotazione Stanze

Questo progetto è una semplice applicazione Angular per la gestione delle prenotazioni di stanze. Permette agli utenti di visualizzare le stanze disponibili, prenotarle e rimuovere le prenotazioni, calcolando dinamicamente l'incasso totale.


## Descrizione Approfondita del Progetto

L'applicazione presenta due liste principali: una per le stanze disponibili e una per le stanze prenotate. Gli utenti possono cliccare su una stanza disponibile per aggiungerla all'elenco delle prenotazioni. Allo stesso modo, le stanze prenotate possono essere rimosse, tornando disponibili. Il sistema calcola e visualizza in tempo reale l'incasso complessivo generato dalle prenotazioni attive. I dati delle stanze sono predefiniti all'interno del codice dell'applicazione e non persistono dopo il ricaricamento della pagina.


## Tecnologie Utilizzate

- Angular: Framework per la costruzione dell'applicazione web.

- TypeScript: Linguaggio di programmazione per lo sviluppo dell'applicazione.

- HTML: Struttura dei componenti e del template.

- SCSS (Sass): Per lo styling dei componenti (come indicato da styleUrl in app.component.ts).

- Bootstrap 5: Framework CSS utilizzato per il layout e lo stile dei componenti (liste, pulsanti, griglie).


## Funzionalità Principali

- Visualizzazione Stanze Disponibili: Elenco delle stanze con tipologia, descrizione e prezzo.

- Prenotazione Stanze: Aggiunta di una stanza dalla lista delle disponibili a quella delle prenotate con un semplice click.

- Rimozione Prenotazioni: Possibilità di annullare una prenotazione, rendendo la stanza nuovamente disponibile.

- Calcolo Incasso Totale: Aggiornamento dinamico dell'incasso totale basato sulle stanze attualmente prenotate.

- Messaggi Condizionali: Visualizzazione di messaggi specifici quando non ci sono stanze disponibili o prenotazioni attive.


## Come Avviare il Progetto

Segui questi passaggi per configurare ed eseguire il progetto localmente:


### Prerequisiti

- Node.js (versione LTS raccomandata)

- npm (Node Package Manager) o Yarn

- Angular CLI: Installa globalmente Angular CLI se non lo hai già fatto:

npm install -g @angular/cli


### Installazione

1. Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/progetto-prenotazione-stanze.git

Assicurati di sostituire 'progetto-prenotazione-stanze.git' con il nome esatto del tuo repository.

2. Naviga nella directory del progetto:

cd progetto-prenotazione-stanze

3. Installa le dipendenze del progetto:

npm install


### Avvio dell'Applicazione

1. Avvia il server di sviluppo Angular:

ng serve

2. Apri il tuo browser web e naviga su http://localhost:4200/. L'applicazione si ricaricherà automaticamente ad ogni modifica dei file sorgente.

## Stato del Progetto

Questo progetto è un'applicazione Angular semplice ma funzionale, ideale per dimostrare le basi dello sviluppo con Angular, la gestione dello stato dei componenti e l'interazione utente. I dati delle stanze sono hardcoded e non persistono al ricaricamento della pagina.


## Contatti

- GitHub: https://github.com/ValeVent

- LinkedIn: https://www.linkedin.com/in/valentina-venturo

- Sito Web: http://www.valentinaventuro.it

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

