Un sito web è un progetto che può arrivare ad avere notevoli dimensioni in termini di righe di codice pertanto si suddividono le funzioni e i vari componenti suddividendoli in vari file eseguendo una divisione del codice che rende più facile il debug/comprensione dell'intero progetto. La nostra file structure (attualmente incompleta) è composta come segue:

![[Pasted image 20250317124352.png]]
La root directory (la cartella che contiene tutto il progetto) è chiamata react.
Tutto il codice sviluppato è contenuto nella cartella **src** che inizialmente conterrà solamente i file **App.jsx** e **main.jsx**.

La cartella **node_modules** contiene tutti i moduli di javascript installati mentre il **package.json** contiene la lista di moduli necessari e presenti nel progetto che vengono automaticamente installati all'esecuzione del comando:
```bash
npm install
```
come descritto nella [[Installazione#Installazione|installazione]]. Questi file vengono automaticamente aggiornati quando si installa un nuovo pacchetto quindi non ce ne dobbiamo preoccupare.

Abbiamo scelto di suddividere i file seguendo una logica molto semplice, il main contiene il metodo di esecuzione del progetto, in altre parole esegue **App.jsx**.