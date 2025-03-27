import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Regolamento.css";

export function Regolamento() {
  const[listaRegole, setListaRegole] = useState([])
  const[searchValue, setSearchValue] = useState("")

  useEffect(()=>{
    const fetchRegole = async() =>{
      const regole = await axios.get("http://localhost:8080/Regolamento")
      setListaRegole(regole.data);
    } 
    fetchRegole()
  },[searchValue])


  return (
    <div className="regolamento">
      <PageTitle title={"Regolamento"} searchLabel={"Search:"} searchValue={searchValue} setSearchValue={setSearchValue} />

      {lista_regolamenti.map((regolamento, index) => (
        <ContainerInfo key={index} props={regolamento} />
      ))}
 
    </div>

  );
}
