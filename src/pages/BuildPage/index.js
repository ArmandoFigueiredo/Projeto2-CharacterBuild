import { FormPrimario } from "../../components/FormPrimario"
import { FormDescritivo } from "../../components/FormDescritivo"

export function BuildPage() {
    return (<>
            <div className="dadosDescritivo">
                <FormDescritivo />
            </div>
            <div className="dadosPrimario">
                <FormPrimario />
            </div>
            <div className="dadosPericias">
                <h3>Forçar x0  </h3>
                <p> Empurrarx0 </p>
            </div>
            <div className="dadosTrunfos">
                <h1>Trunfos</h1>
                <h2>Sinas</h2>
            </div>
            <div className="dadosSecundarios">
                <h1>Vitalidade</h1>
                <h2>Dano Básico</h2>
            </div>
            <div className="dadosInventario">
                <h1>Slot Básico</h1>
                <h2>1</h2>
            </div>
            </>
        )


}