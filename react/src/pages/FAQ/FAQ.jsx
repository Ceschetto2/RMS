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

  let titolo_info = {
    titolo: "FAQ",
    search_bar_default_text: "test",
    search_buttond_default: "test",
  };
  return (
    <div className="faq-container">
        
      <PageTitle props={titolo_info} />

      {lista_domande.map((domanda, index) => (
        <DropDownInfo key={index} props={domanda} />
      ))}
    </div>
  );
}
