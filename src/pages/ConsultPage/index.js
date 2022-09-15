import {CharacterFace} from "../../components/CharacterFace"
import {CharacterDetail} from "../../components/CharacterDetail"
import {EditPage} from "../EditPage"
import {useState} from "react"


export function ConsultPage () {

    const [currFichaId, setCurrFichaId] = useState ("6321e0ae4bf6cd00178ada5e");
    const [editOk, setEditOk]=useState(false);
    
    return (<> 
    <div className="d-flex">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e519155ccb648525af8d24882a38081e21c6c2a
    {!editOk ? <CharacterFace setCurrFichaId = {setCurrFichaId}/>:<></>}
    {!editOk ? <CharacterDetail currFichaId = {currFichaId} setEditOk = {setEditOk}/>:<></>}
    {editOk ? <EditPage currFichaId={currFichaId}/> : <></>}
    </div>
<<<<<<< HEAD
=======
    <CharacterFace setCurrFichaId = {setCurrFichaId}/>
    <CharacterDetail currFichaId = {currFichaId}/>
    <EditPage />
    </div>       
>>>>>>> 128876ec2c12deb9b492c8f8e1092c9d4fcc6628
=======

>>>>>>> 7e519155ccb648525af8d24882a38081e21c6c2a
</>)
}