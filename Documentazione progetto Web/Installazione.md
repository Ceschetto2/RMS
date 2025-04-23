

## Prerequisiti
L'intero progetto e replicabile su qualsiasi dispositivo e con qualsiasi sistema operativo. Ogni software usato è gratuito in quanto si basa su librerie open-source, principalmente <a href = "https://react.dev/">react</a>.

React è una libreria di [javascript], un linguaggio interpretato grazie all'ambiente <a href="https://nodejs.org/en">NodeJS</a>.
Quindi i prerequisiti per lo sviluppo di questo software sono:
- NodeJS.
- npm: Un gestore pacchetti per javascript che consente l'installazione facilitata di librerie.
<a href="https://nodejs.org/en/download">Guida per l'installazione.</a>
Inoltre è necessario un qualsiasi ide o editor di testo per lo sviluppo (va bene anche notepad, ma è fortemente sconsigliato). Io, personalmente, utilizzo <a href="https://code.visualstudio.com/">VScode</a> che, tramite estensioni, consente di sviluppare in qualsiasi linguaggio e integra tutti i principali strumenti di sviluppo come <a href="https://git-scm.com/">Git</a>.

## Passi da eseguire per installare l'applicazione.

1. clonare la repository:

```bash

git clone https://github.com/Ceschetto2/RMS

```


2. Partiamo con l'installazione del front-end. Spostiamoci nella cartella react

```bash

cd react

```

3. Installare i moduli necessari utilizzati nel progetto, specificati nel package.json:

```bash

npm install

```

4. Avviare il programma:

```bash

npm run dev

```

Di default il programma si avvierà sulla porta 5173 in localhost: http://localhost:5173/
Ogni qualvolta che si modifica un file e lo si salva, le modifiche vengono automaticamente aggiornate sul sito in localhost.

Per il back-end la situazione è simile, ma dobbiamo anche configurare il database.
Spostiamoci nella cartella del back-end (backen-serv). Configurare il file in base al proprio db, utente e password. Il db di produzione ( vuoto ) verrà generato automaticamente grazie a [[Back-end#Sequelize|sequelize]]. Per i dati possiamo usare Postman dove sono salvate tutte le richieste che consento anche l'invio e quindi il caricamento di dati nel db. Comodo per test rapidi e reset tattici.
Una volta creato il db vuoto con utente e password come impostati nel file config, possiamo procedere all'installazione del back-end con gli stessi comandi del front-end (a partire dal punto 2).

Partiamo con il [[Front-end]] del progetto.

