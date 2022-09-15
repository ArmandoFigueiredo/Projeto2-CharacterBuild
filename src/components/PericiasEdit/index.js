import { useState, useEffect } from "react";
import axios from "axios";

export function PericiasEdit ({pericId}){
    
    const [periciasEdit, setPericiasEdit] = useState ({
        pericias:[]
    })    
    
    useEffect(()=>{
        
        async function fetchPerEdit(){
        try{

            const response = await axios.get(`https://ironrest.herokuapp.com/chrbuilderPericias/${pericId}`);
            setPericiasEdit(response.data);
            console.log(response.data)

            } catch (err) {
                console.log (err)
            }
        }
        fetchPerEdit();
    },[])

    return(<>
    <div>
        {periciasEdit.pericias.map((curP)=>{
            
            return (<>
            <form>
            <input id="bla" name="blabla" type="text" value={curP.desPericia} />     
            <button type="submit">Editar</button>
            </form>
            </>
            )
        })}

    </div>
    
    
    
    </>)






}


