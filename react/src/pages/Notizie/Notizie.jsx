import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Notizie.css";
import axios from "axios"
export function Notizie() {

  const[searchValue, setSearchValue] = useState("")
  const[listaNotizie, setListaNotizie] = useState([])
 
  useEffect(()=>{
    const fetchNotizie = async() =>{
      const results = await axios.get("http://localhost:8080/Notizie",
        {
          params:{data: searchValue},
        }
      )

      setListaNotizie(results.data)
    }
    fetchNotizie();
  }, [searchValue])
  

  return (
    <div className="notizie">
      <PageTitle title={"Notizie"} searchLabel={"Search:"} searchValue={searchValue} setSearchValue={setSearchValue} />

      {listaNotizie.map((notizia, index) => (
        <ContainerInfo key={index} notizia={notizia} />
      ))}

    
    </div>

  );
}
