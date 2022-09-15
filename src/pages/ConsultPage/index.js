import {CharacterFace} from "../../components/CharacterFace"
import {CharacterDetail} from "../../components/CharacterDetail"
import {useState} from "react"


export function ConsultPage () {

    const [currFichaId, setCurrFichaId] = useState ("6321dd0c4bf6cd00178ada57")
    
    return (<> 
    <div className="d-flex">
    <CharacterFace setCurrFichaId = {setCurrFichaId}/>
    <CharacterDetail currFichaId = {currFichaId}/>
    </div>       
</>)
}