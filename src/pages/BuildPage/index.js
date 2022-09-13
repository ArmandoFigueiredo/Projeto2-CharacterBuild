import { FormPrimario } from "../../components/FormPrimario"
import { FormPericias} from "../../components/FormPericias"

import {useState} from "react"

export function BuildPage() {

    const [fichaId, setFichaId]=useState("");

    return (<>
            <div className="dadosDescritivo">
                <FormPrimario setFichaId={setFichaId}/>
            </div>
            <div className="dadosPrimario">
                <FormPericias fichaId={fichaId}/>
            </div>
            </>  
        )
}