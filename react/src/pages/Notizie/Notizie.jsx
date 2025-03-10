import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Notizie.css";
export function Notizie() {
  let lista_notizie = [
    {
      titolo: "LNI sez.Ancona sbanca ai campionati regionali di jole ",
      descrizione: "descrizione 1",
      dataPubblicazione: "1/1/1/1",
      oggetto: "Oggetto 1",
    },
    { titolo: "titolo 2", descrizione: "descrizione 2" },
    { titolo: "titolo 3", descrizione: "descrizione 3" },
  ];
  let titolo_info = {
    titolo: "Notizie",
    search_bar_default_text: "test",
    search_buttond_default : "test"
  }

  return (
    <div className="notizie">

      <PageTitle props={titolo_info}/>

      {lista_notizie.map((notizia, index) => (
        <ContainerInfo key={index} props={notizia} />
      ))}
    </div>
  );
}
