import {CharacterFace} from "../../components/CharacterFace"
import {CharacterDetail} from "../../components/CharacterDetail"
import {EditPage} from "../EditPage"
import {useState} from "react"


export function ConsultPage () {

    const [currFichaId, setCurrFichaId] = useState ("6321e0ae4bf6cd00178ada5e");
    const [editOk, setEditOk]=useState(true);
    
    return (<> 
    <div className="d-flex">
<<<<<<< HEAD
    {!editOk ? <CharacterFace setCurrFichaId = {setCurrFichaId}/>:<></>}
    {!editOk ? <CharacterDetail currFichaId = {currFichaId}/>:<></>}
    {editOk ? <EditPage currFichaId={currFichaId}/> : <></>}
    </div>
=======
    <CharacterFace setCurrFichaId = {setCurrFichaId}/>
    <CharacterDetail currFichaId = {currFichaId}/>
    <EditPage />
    </div>       
>>>>>>> 128876ec2c12deb9b492c8f8e1092c9d4fcc6628
</>)
}