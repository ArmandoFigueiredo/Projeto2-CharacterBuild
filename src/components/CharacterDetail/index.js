import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"


export function CharacterDetail() { 
 
  const [detail, setDetail] = useState([]); 
 
  useEffect(() => {
    async function fetchCharacterDetail() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/chrbuilderPericias/"
        );
        console.log(response)
        setDetail(response.data);
        console.log(detail)
      } catch (err) {
        console.log(err);
      }
    }
    fetchCharacterDetail();
  }, []);

  return (<>
    <h1>Detalhes</h1> 
    <div className={style.detail}>
      {detail.map((currDetail)=>{
        return (<>          
          {currDetail.pericias.map((currPer) =>{
            return (<>
                <div></div>
            </>)
          })}                          
        </>)})       
      }
    </div>
  </>
);
}
