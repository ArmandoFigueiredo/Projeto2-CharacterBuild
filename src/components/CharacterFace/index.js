import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"


export function CharacterFace() { 
 
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
      <div className={style.consulta}>
        {face.map((currFace)=>{
          return (<>
            <img className={style.imgface} src={currFace.atrImagem} />
            <div>{currFace.desNome}</div> 
            <div>{currFace.desJogador}</div>
            <div>{currFace.periciaId}</div>
            {console.log(currFace.atrImagem)} 
          </>)})          
        }
      </div>
    </>
  );
}