import { FormPrimario } from "../../components/FormPrimario"
import { FormPericias} from "../../components/FormPericias"

export function BuildPage() {
    return (<>
            <div className="dadosDescritivo">
                <FormPrimario />
            </div>
            <div className="dadosPrimario">
                <FormPericias />
            </div>
            </>  
        )
}