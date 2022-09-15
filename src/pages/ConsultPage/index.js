import {CharacterFace} from "../../components/CharacterFace"
import {CharacterDetail} from "../../components/CharacterDetail"
import {EditPage} from "../EditPage"
import {useState} from "react"


export function ConsultPage () {

    const [currFichaId, setCurrFichaId] = useState ("6321e0ae4bf6cd00178ada5e");
    const [editOk, setEditOk]=useState(false);
    
    return (<> 
    <div className="d-flex">
    {!editOk ? <CharacterFace setCurrFichaId = {setCurrFichaId}/>:<></>}
    {!editOk ? <CharacterDetail currFichaId = {currFichaId} setEditOk = {setEditOk}/>:<></>}
    {editOk ? <EditPage currFichaId={currFichaId}/> : <></>}
    </div>

</>)
}