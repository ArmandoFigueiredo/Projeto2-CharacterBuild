import axios from "axios";
import { useState, useEffect } from "react";
import { AttributesEdit } from "../../components/AttributesEdit";
import {useParams} from "react-router-dom"
import { PericiasEdit } from "../../components/PericiasEdit";

export function EditPage (props) {
    
    const {id}=useParams();
    const [toggle, setToggle] = useState(false)
        
    const [pericid, setPericid] = useState ("")
    console.log(pericid)

    return (<>
    <h1>Editando</h1>
    
    <div>
        <AttributesEdit id={id} setPericid={setPericid} setToggle={setToggle}/>
        
    </div>
    <div>
        {toggle ? <PericiasEdit pericId={pericid} />:<></>}
    </div>
    </>)
}