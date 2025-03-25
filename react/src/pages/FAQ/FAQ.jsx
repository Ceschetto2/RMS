import { useEffect, useState } from "react";
import { DropDownInfo } from "../../components/DropDownInfo/DropDownInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import axios from "axios";
import "./FAQ.css";
export function FAQ() {

  const [searchValue, setSearchValue] = useState("");
  const [FaqList, setFaqList] = useState([]);
  useEffect(() => {
    const fetchFaq = async () => {
      const response = await axios.get("http://localhost:8080/Faq", {
        params: { data: searchValue },
      });

      setFaqList(response.data);
      
    };
    fetchFaq();

  }, [searchValue]);

  return (
    <div className="faq-container">
      <PageTitle
        title={"FAQ"}
        searchLabel={"Search:"}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {FaqList.map((domanda, index)=>(<DropDownInfo key={index} answare={domanda.answare} question={domanda.question} />))}
    </div>
  );
}
