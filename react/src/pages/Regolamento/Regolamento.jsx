import { useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Regolamento.css";

export function Regolamento() {
  let lista_regolamenti= [
    {
      titolo: "Regolamento 1 ",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 1",
      dataPubblicazione: "1/1/1/1",
      oggetto: "Oggetto 1",
    },
    {
      titolo: "Regolamento 2",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 2",
    },
    {
      titolo: "Regolamento 3",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 3",
    },
  ];
  const[searchValue, setSearchValue] = useState("")

  return (
    <div className="regolamento">
      <PageTitle title={"Regolamento"} searchLabel={"Search:"} searchValue={searchValue} setSearchValue={setSearchValue} />

      {lista_regolamenti.map((regolamento, index) => (
        <ContainerInfo key={index} props={regolamento} />
      ))}
 
    </div>

  );
}
