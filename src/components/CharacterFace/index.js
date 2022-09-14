import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export function CharacterFace() {
 
  // const { id } = useParams();
  const [face, setFace] = useState([]); 
 
  useEffect(() => {
    async function fetchFace() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/chrbuilderPrincipal/"
        );
          console.log(response)
        setFace(response.data);
        console.log(face)
      } catch (err) {
        console.log(err);
      }
    }
    fetchFace();
  }, []);

  return (<>
      <h1>Consulta</h1> 
      <div>
        {face.map((currFace)=>{
          return (<>
            <div>{currFace.desNome} teste</div> 
            <div>{currFace.periciaId} teste</div>  
          </>)})
        }
      </div>
    </>
  );
}