import axios from "axios";
import { useState, useEffect } from "react";
import { AttributesEdit } from "../../components/AttributesEdit";
import {useParams} from "react-router-dom"
import { PericiasEdit } from "../../components/PericiasEdit";

export function EditPage (props) {
    
    const {id}=useParams();
    const [toggle, setToggle] = useState(false)
    const [pericId, setPericid] = useState ("")
    

    return (<>
    <h1>Editando</h1>
    
    <div className="editAtributos">
        <AttributesEdit id={id} setPericid={setPericid} setToggle={setToggle}/>
    </div>
    <div className="editPericias">
        {toggle === true ? <PericiasEdit pericId={pericId} />:null}
    </div>
    </>)
}