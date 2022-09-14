import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export function CharacterFace() {
 
  const { id } = useParams();
  const [face, setFace] = useState({}); 
 
  useEffect(() => {
    async function fetchFace() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/chrbuilderPrincipal/${id}`
        );

        setFace(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchFace();
  }, [id]);

  return (
    <>
      <h1>Consulta</h1>    
    </>
  );
}