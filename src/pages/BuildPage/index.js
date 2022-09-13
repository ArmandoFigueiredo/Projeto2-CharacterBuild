import { FormPrimario } from "../../components/FormPrimario"

export function BuildPage() {
    return (<>
            <div className="dadosPrimarios">
                <h1>Nome</h1>
            </div>
            <div className="dadosAtributos">
                <FormPrimario />
            </div>
            <div className="dadosPerícias">
                <h3>Forçar x0  </h3>
                <p> Empurrarx0 </p>
            </div>
            <div className="dadosTrunfos">
                <h1>Trunfos</h1>
                <h2>Sinas</h2>
            </div>
            <div className="dadosSecundários">
                <h1>Vitalidade</h1>
                <h2>Dano Básico</h2>
            </div>
            <div className="dadosInventário">
                <h1>Slot Básico</h1>
                <h2>1</h2>
            </div>
            </>
        )


}