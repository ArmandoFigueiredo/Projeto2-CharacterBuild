import {CharacterFace} from "../../components/CharacterFace"
import {CharacterDetail} from "../../components/CharacterDetail"
import {useState} from "react"
import style from  "./styles.module.css"

export function ConsultPage () {

    const [currFichaId, setCurrFichaId] = useState ("");
    const [editOk, setEditOk]=useState(false);
    
    return (<div className={style.detailsPage}> 
    <div className="d-flex">
    <CharacterFace setCurrFichaId = {setCurrFichaId}/>
    <CharacterDetail currFichaId = {currFichaId} setEditOk = {setEditOk}/>
    </div>
</div>)
}