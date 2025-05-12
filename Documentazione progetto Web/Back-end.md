
## Librerie
---
### Express
<a href=https://expressjs.com/it/guide/routing.html>Express</a> è il cuore del nostro server di back-end, ci consente di definire le route per effettuare le varie richieste(GET, POST,...) dal [front-end](Front-end.md).  

### Sequelize
<a href=https://sequelize.org/docs/v6/category/core-concepts>Sequelize</a> è vitale per il progetto, consente tutte le operazioni legate al [Database](Database.md) in quanto consente la creazione di tutte le tabelle necessarie, e tutte le operazioni **CRUD** legate alle query.
Questa libreria consente di creare dei **modelli** che rappresentano le tabelle del nostro [Database](Database.md). I **Modelli** definiti sono delle classi (con attributi le features della tabella e dei metodi) hanno all'interno i metodi che consentono di fare operazioni sul db (query).
Il vantaggio di questa libreria è che una volta avvenuta la connessione al [Database](Database.md), in automatico creerà le tabelle o aggiornerà quelle esistenti senza doverlo fare a mano. Questo consente un rapido deploy. Inoltre l'uso dei modelli rende sicure le transazioni.

#### Configurazione di Sequelize

La connessione al **Database** avviene in automatico all'esecuzione del [Database](Database.md). La libreria [sequelize](Back-end.md#sequelize) ha un file di configurazione situato in: 
```shell
backend-serv
├── package.json
├── package-lock.json
└── src
    ├── config
    │   └── config.json   #<---Questo è il file di configurazione
    ├── controllers
    │   ├── faq_controllers
    │   │   └── faqControllers.js
    │   ├── gallery_controllers
    │   │   └── galleryController.js
    │   └── news_controllers
    │       └── newsController.js
    ├── models
    │   ├── FAQ_questions.js
    │   ├── Gallery_Images.js
    │   ├── index.js
    │   ├── InternalRegulations.js
    │   ├── News.js
    │   ├── Notices.js
    │   ├── Pdfs.js
    │   └── Users.js
    ├── routes
    │   ├── Bandi_route.js
    │   ├── FAQ_routes.js
    │   ├── GalleryImages_routes.js
    │   ├── Notizie_routes.js
    │   └── Regolamento_routes.js
    └── server.js
```

Quando si effettua il pull, dopo aver eseguito l'[Installazione](Installazione.md), bisogna creare questo file (config.json) nel folder config, come da albero mostrato quì sopra. Il file contiene un *Json* con le credenziali di accesso al database e il tipo di linguaggio come mostato di seguito:
```json
{

	"development":{
	
		"username": "inserire username",
		
		"password": "Password o null(senza virgolette)",
		
		"database": "Nome del database",
		
		"host": "127.0.0.1 (localhost) o indirizzo del server contente il db",
		
		"dialect": "dialetto di sql in uso dal db (mariadb, mysql, etc...)"

	},

	"test": {
	
		"username": "inserire username",
		
		"password": "Password o null(senza virgolette)",
		
		"database": "Nome del database",
		
		"host": "127.0.0.1 (localhost) o indirizzo del server contente il db",
		
		"dialect": "dialetto di sql in uso dal db (mariadb, mysql, etc...)"

	},

	"production": {
		
		"username": "inserire username",
		
		"password": "Password o null(senza virgolette)",
		
		"database": "Nome del database",
		
		"host": "127.0.0.1 (localhost) o indirizzo del server contente il db",
		
		"dialect": "dialetto di sql in uso dal db (mariadb, mysql, etc...)"

	}

}
```

Una volta completati i campi con l'username la password e il nome del [Database](Database.md) possiamo procedere con l'[Installazione](Installazione.md).

