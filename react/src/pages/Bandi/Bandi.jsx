import { useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Bandi.css";

export function Bandi() {
  let lista_bandi = [
    {
      titolo: "bando 1 ",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 1",
      dataPubblicazione: "1/1/1/1",
      oggetto: "Oggetto 1",
    },
    {
      titolo: "bando 2",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 2",
    },
    {
      titolo: "bando 3",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",
      descrizione: "descrizione 3",
    },
  ];

  const[searchValue,setSearchValue]= useState("")
  return (
    <div className="bandi">
      <PageTitle title={"Bandi"} searchLabel={"Search:"} searchValue={searchValue} setSearchValue={setSearchValue} />


      {lista_bandi.map((bando, index) => (
        <ContainerInfo key={index} props={bando} />
      ))}
 
    </div>

  );
}
