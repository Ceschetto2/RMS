import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Regolamento.css";

export function Regolamento() {
  let lista_regolamenti= [
    {
      titolo: "Regolamento 1 ",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 1",
      dataPubblicazione: "1/1/1/1",
      oggetto: "Oggetto 1",
    },
    {
      titolo: "Regolamento 2",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 2",
    },
    {
      titolo: "Regolamento 3",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 3",
    },
  ];
  let titolo_info = {
    titolo: "Regolamento",
    search_bar_default_text: "test",
    search_buttond_default: "test",
  };

  return (
    <div className="regolamento">
      <PageTitle props={titolo_info} />

      {lista_regolamenti.map((regolamento, index) => (
        <ContainerInfo key={index} props={regolamento} />
      ))}
 
    </div>

  );
}
