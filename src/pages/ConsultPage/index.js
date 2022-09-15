import {CharacterFace} from "../../components/CharacterFace"
import {CharacterDetail} from "../../components/CharacterDetail"
import {EditPage} from "../EditPage"
import {useState} from "react"


export function ConsultPage () {

    const [currFichaId, setCurrFichaId] = useState ("")
    
    return (<> 
    <div className="d-flex">
    <CharacterFace setCurrFichaId = {setCurrFichaId}/>
    <CharacterDetail currFichaId = {currFichaId}/>
    <EditPage />
    </div>       
</>)
}