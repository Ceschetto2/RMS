import { useEffect, useState } from "react";
import { DropDownInfo } from "../../components/DropDownInfo/DropDownInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./FAQ.css";
export function FAQ() {
  let lista_domande = [
    {
      text: "domanda 1",
    },
    { text: "domanda 2" },
  ];
  const[searchValue, setSearchValue] = useState("")
  const[FaqList, setFaqList] = useState("")
  useEffect(()=>{
    const fetchImages = async() => await (axios.get("http://localhost:8080/GalleryImages"),{
      params:{data:searchValue}
    })

  })


  return (
    <div className="faq-container">
        
        <PageTitle title={"FAQ"} searchLabel={"Search:"} searchValue={searchValue} setSearchValue={setSearchValue} />

      {lista_domande.map((domanda, index) => (
        <DropDownInfo key={index} props={domanda} />
      ))}
    </div>
  );
}
