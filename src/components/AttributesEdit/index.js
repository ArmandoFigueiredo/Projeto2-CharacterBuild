import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast"

export function AttributesEdit (props){
        
    const [dadosEditaveis, setDadosEditaveis] = useState ({
        desNome:"",
        desTipo:"",
        desJogador:"",
        desNarrador:"",
        desCampanha:"",
        desDescricao:"",
        atrImagem:"",
        atrForca:0,
        atrDestreza:0,
        atrConst:0,
        atrCarisma:0,
        atrIntel:0,
        atrVontade:0,
        desTrunfo1:"",
        desTrunfo2:"",
        desTrunfo3:"",
        desTrunfo4:"",
        desTrunfo5:"",
        desTrunfo6:"",
        desTrunfo7:"",
        desTrunfo8:"",
        desTrunfo9:"",
        desSina1:"",
        desSina2:"",
        desSina3:"",
        desSina4:"",
        desSina5:"",
        infInventario1:"",
        infInventario2:"",
        infInventario3:"",
        infInventario4:"",
        infInventario5:"",
        infInventario6:"",
        infInventario7:"",
        infInventario8:"",
        infInventario9:"",
        atrDanoBasico:1,
        atrIniciativa:1,
        atrSorte:1,
        atrVitalidade:5,
        atrAtivacoes:5,
        atrResistencia:1,
        periciaId: "6321e15e4bf6cd00178ada60"
    })

    useEffect(() => {
        async function fetchCharacterEdit() {
            try {
            
                const response = await axios.get(
                `https://ironrest.herokuapp.com/chrbuilderPrincipal/${props.idEdit}`
                );
            setDadosEditaveis(response.data);
            //console.log(dadosEditaveis);
            //console.log("aushuahsuauhsasidjaisjdisaidsjau")
            } catch (err) {
            console.log(err);
        }
        }
        fetchCharacterEdit();
    }, []);


    function handleChange(evento) {
            //console.log(dadosEditaveis);
            setDadosEditaveis({...dadosEditaveis, [evento.target.name]:evento.target.value});
    }
    
    async function handleSubmit(evento) {
        evento.preventDefault();
        // console.log("loracato")
        // console.log(props.idEdit)
        delete dadosEditaveis._id;

        try{
            const resposta = await axios.put(`https://ironrest.herokuapp.com/chrbuilderPrincipal/${props.idEdit}`, dadosEditaveis)
            
        //console.log("burbuleos");
        
        toast('Yahhaoooaoooa!',
            {
                icon: '🦴',
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            });
        
        } catch (err){
            console.log(err);
        }
    }




    return (<>
    <form onSubmit={handleSubmit}>
        <div>
            <h1>Descrição</h1>
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="desNome" type="text" value={dadosEditaveis.desNome} onChange={handleChange}/>
            
            <label htmlFor="tipo">Tipo</label>
            <input id="tipo" name="desTipo" type="text" value={dadosEditaveis.desTipo} onChange={handleChange}/>
                        
            <label htmlFor="jogador">Jogador</label>
            <input id="jogador" name="desJogador" type="text" value={dadosEditaveis.desJogador} onChange={handleChange}/>
                        
            <label htmlFor="narrador">Narrador</label>
            <input id="narrador" name="desNarrador" type="text" value={dadosEditaveis.desNarrador} onChange={handleChange}/>
                        
            <label  htmlFor="campanha">Campanha</label>
            <input id="campanha" name="desCampanha" type="text" value={dadosEditaveis.desCampanha} onChange={handleChange}/>
                        
            <label htmlFor="descricao">Descrição</label>
            <input id="descricao" name="desDescricao" type="text" value={dadosEditaveis.desDescricao} onChange={handleChange}/>

            <label htmlFor="imagem">Imagem</label>
            <input id="Imagem" name="atrImagem" type="text" value={dadosEditaveis.atrImagem} onChange={handleChange}/>
        </div>
        <button type="submit">Modificando !</button>
    </form>
    </>)




}