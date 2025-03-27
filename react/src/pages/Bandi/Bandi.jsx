import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Bandi.css";

export function Bandi() {
  const[listaBandi, setListaBandi] = useState([])
  const[searchValue,setSearchValue]= useState("")

  useEffect(()=>{
    const fetchBandi = async() =>{
      const bandi = await axios.get("http://localhost:8080/Bandi")
      setListaBandi(bandi.data)
    }
    fetchBandi()
  },[searchValue])


  return (
    <div className="bandi">
      <PageTitle title={"Bandi"} searchLabel={"Search:"} searchValue={searchValue} setSearchValue={setSearchValue} />


      {lista_bandi.map((bando, index) => (
        <ContainerInfo key={index} props={bando} />
      ))}
 
    </div>

  );
}
