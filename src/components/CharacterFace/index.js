import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"

export function CharacterFace(props) { 

  function ButtonDetails(receive) {
    props.setCurrFichaId (receive)
    
 }
 
  const [face, setFace] = useState([]); 
 
  useEffect(() => {
    async function fetchFace() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/chrbuilderPrincipal/"
        );
        
        setFace(response.data);
        
      } catch (err) {
        console.log(err);
      }
    }
    fetchFace();
  }, []);

  return (<div className={style.character}>
    
      <div className={style.consulta}>
        {face.map((currFace)=>{
          return (
            <div className={style.cardColumn} onClick={() => {ButtonDetails (currFace._id)}}>

            <div>

            <img className={style.imgface} src={currFace.atrImagem} />
            <div >{currFace.desNome}</div> 
            <div>{currFace.desJogador}</div>
            <div>{currFace.desCampanha}</div>

            </div>
            
            </div>                                   
          )})          
        }
      </div>
    </div>
  );
}