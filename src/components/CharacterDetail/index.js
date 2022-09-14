import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"



export function CharacterDetail(props) { 
 
  const [detail, setDetail] = useState({
    fichaId: "",
    pericias: [],
  }); 
  const [pericia, setPericia] = useState({});
 
  useEffect(() => {
    async function fetchCharacterDetail() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/chrbuilderPrincipal/${props.currFichaId}`
        );
        console.log(response)
        setDetail(response.data);
        console.log(detail)
      } catch (err) {
        console.log(err);
      }
    }
    fetchCharacterDetail();
  }, [props.currFichaId]);

  useEffect(() => {
    async function fetchPericiaDetail() {
        try {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/chrbuilderPericias/${detail.periciaId}`
            );
            console.log(response)
            setPericia(response.data);
            console.log(pericia)
        }   catch (err) {
            console.log(err)
        }
    }
    fetchPericiaDetail();
  }, [detail])

  return (<>
    <h1>Detalhes</h1> 
    <div className={style.detail}>
    <p></p>
      
    </div>
  </>
);
}

