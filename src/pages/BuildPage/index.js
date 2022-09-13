import { FormPrimario } from "../../components/FormPrimario"
import { FormPericias} from "../../components/FormPericias"

import {useState} from "react"

export function BuildPage() {

    const [fichaId, setFichaId]=useState("");
    const [liber, setLiber]=useState("false");
    console.log(liber);

    return (<>
            <div className="dadosDescritivo">
                <FormPrimario setFichaId={setFichaId} setLiber={setLiber}/>
            </div>
            {liber===true ? 
            <div className="dadosPrimario">
                <FormPericias fichaId={fichaId}/>
            </div>
            : null }
            </>  
        )
}