import { useEffect } from "react"
import axios from "axios";


export default function PersonalArea() {
    const fetchUser = async () => {
        try {
            const response = await axios.get("http://localhost:8080/User/getUserFromToken", {
                headers: {
                    "authorization": localStorage.getItem("jwt")
                }
            });
            console.log(response.data); // o fai qualcosa con i dati
        } catch (error) {
            console.error("Errore nel recupero dell'utente:", error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div>

            <h1>Personal Area</h1>

        </div>
    )
}