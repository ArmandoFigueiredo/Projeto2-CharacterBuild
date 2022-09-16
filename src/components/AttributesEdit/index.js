import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast"

export function AttributesEdit ({id, setPericid, setToggle}){
    
    let listPericias=[];
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
        periciaId: ""
    })

   

    useEffect(()=>{
        async function fetchCharEdit (){
            try{
            
            const response = await axios.get(`https://ironrest.herokuapp.com/chrbuilderPrincipal/${id}`);
            setDadosEditaveis(response.data);
            
            } catch (err) {
                console.log (err)
            }
        }
        fetchCharEdit();
    },[])

    
    function handleChange(evento) {
            //console.log(dadosEditaveis);
            setDadosEditaveis({...dadosEditaveis, [evento.target.name]:evento.target.value});
    }
    
    async function handleSubmit(evento) {
        evento.preventDefault();
        delete dadosEditaveis._id;

        try{
            const resposta = await axios.put(`https://ironrest.herokuapp.com/chrbuilderPrincipal/${id}`, dadosEditaveis)
            
        console.log("burbuleos");
        setPericid(dadosEditaveis.periciaId);
        setToggle(true);

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

    useEffect(()=>{
        setDadosEditaveis({...dadosEditaveis, atrDanoBasico:1+Number(`${dadosEditaveis.atrForca}`)});
        },[dadosEditaveis.atrForca]);
    
    useEffect(()=>{
        setDadosEditaveis({...dadosEditaveis, atrIniciativa:1+Number(`${dadosEditaveis.atrDestreza}`)});
        },[dadosEditaveis.atrDestreza]);
        
    useEffect(()=>{
        setDadosEditaveis({...dadosEditaveis, atrSorte:3+Number(`${dadosEditaveis.atrCarisma}`)});
        },[dadosEditaveis.atrCarisma]);

    useEffect(()=>{
        setDadosEditaveis({...dadosEditaveis, atrVitalidade:5+(3*Number(`${dadosEditaveis.atrConst}`))});
        },[dadosEditaveis.atrConst]);

    useEffect(()=>{
        setDadosEditaveis({...dadosEditaveis, atrAtivacoes:5+(3*Number(`${dadosEditaveis.atrIntel}`))});
        },[dadosEditaveis.atrIntel]);

    useEffect(()=>{
        setDadosEditaveis({...dadosEditaveis, atrResistencia:1+(2*Number(`${dadosEditaveis.atrVontade}`))});
        },[dadosEditaveis.atrVontade])



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

        <div>
            <h2>Atributos</h2>
            <label htmlFor="forca">Força</label>
            <input id="forca" name="atrForca" type="number" value={dadosEditaveis.atrForca} onChange={handleChange}/>
            
            <label htmlFor="destreza">Destreza</label>
            <input id="destreza" name="atrDestreza" type="number" value={dadosEditaveis.atrDestreza} onChange={handleChange}/>
                        
            <label htmlFor="const">Constituição</label>
            <input id="const" name="atrConst" type="number" value={dadosEditaveis.atrConst} onChange={handleChange}/>
                        
            <label htmlFor="carisma">Carisma</label>
            <input id="carisma" name="atrCarisma" type="number" value={dadosEditaveis.atrCarisma} onChange={handleChange}/>
                        
            <label htmlFor="intel">Inteligência</label>
            <input id="intel" name="atrIntel" type="number" value={dadosEditaveis.atrIntel} onChange={handleChange}/>
                        
            <label htmlFor="vontade">Vontade</label>
            <input id="vontade" name="atrVontade" type="number" value={dadosEditaveis.atrVontade} onChange={handleChange}/>
        </div>

        <div>
            <h2>Trunfos</h2>
            <label htmlFor="trunfo1">1</label>
            <input id="trunfo1" name="desTrunfo1" type="text" value={dadosEditaveis.desTrunfo1} onChange={handleChange}/>         

            <label htmlFor="trunfo2">2</label>
            <input id="trunfo2" name="desTrunfo2" type="text" value={dadosEditaveis.desTrunfo2} onChange={handleChange}/>

            <label htmlFor="trunfo3">3</label>
            <input id="trunfo3" name="desTrunfo3" type="text" value={dadosEditaveis.desTrunfo3} onChange={handleChange}/>

            <label htmlFor="trunfo4">4</label>
            <input id="trunfo4" name="desTrunfo4" type="text" value={dadosEditaveis.desTrunfo4} onChange={handleChange}/>

            <label htmlFor="trunfo5">5</label>
            <input id="trunfo5" name="desTrunfo5" type="text" value={dadosEditaveis.desTrunfo5} onChange={handleChange}/>

            <label htmlFor="trunfo6">6</label>
            <input id="trunfo6" name="desTrunfo6" type="text" value={dadosEditaveis.desTrunfo6} onChange={handleChange}/>

            <label htmlFor="trunfo7">7</label>
            <input id="trunfo7" name="desTrunfo7" type="text" value={dadosEditaveis.desTrunfo7} onChange={handleChange}/>

            <label htmlFor="trunfo8">8</label>
            <input id="trunfo8" name="desTrunfo8" type="text" value={dadosEditaveis.desTrunfo8} onChange={handleChange}/>

            <label htmlFor="trunfo9">9</label>
            <input id="trunfo9" name="desTrunfo9" type="text" value={dadosEditaveis.desTrunfo9} onChange={handleChange}/>
        </div>

        <div>
            <h2>Sinas</h2>
            <label htmlFor="sina1">1</label>
            <input id="sina1" name="desSina1" type="text" value={dadosEditaveis.desSina1} onChange={handleChange}/>
            
            <label htmlFor="sina2">2</label>
            <input id="sina2" name="desSina2" type="text" value={dadosEditaveis.desSina2} onChange={handleChange}/>

            <label htmlFor="sina3">3</label>
            <input id="sina3" name="desSina3" type="text" value={dadosEditaveis.desSina3} onChange={handleChange}/>

            <label htmlFor="sina4">4</label>
            <input id="sina4" name="desSina4" type="text" value={dadosEditaveis.desSina4} onChange={handleChange}/>

            <label htmlFor="sina5">5</label>
            <input id="sina5" name="desSina5" type="text" value={dadosEditaveis.desSina5} onChange={handleChange}/>
        </div>

        <div>
            <h2>Inventário</h2>
            <label htmlFor="inventario1">Slot Básico</label>
            <input id="inventario1" name="infInventario1" type="text" value={dadosEditaveis.infInventario1} onChange={handleChange}/>
            
            <label htmlFor="inventario2">1</label>
            <input id="inventario2" name="infInventario2" type="text" value={dadosEditaveis.infInventario2} onChange={handleChange}/>

            <label htmlFor="inventario3">2</label>
            <input id="inventario3" name="infInventario3" type="text" value={dadosEditaveis.infInventario3} onChange={handleChange}/>

            <label htmlFor="inventario4">3</label>
            <input id="inventario4" name="infInventario4" type="text" value={dadosEditaveis.infInventario4} onChange={handleChange}/>

            <label htmlFor="inventario5">4</label>
            <input id="inventario5" name="infInventario5" type="text" value={dadosEditaveis.infInventario5} onChange={handleChange}/>

            <label htmlFor="inventario6">5</label>
            <input id="inventario6" name="infInventario6" type="text" value={dadosEditaveis.infInventario6} onChange={handleChange}/>

            <label htmlFor="inventario7">Extra 1</label>
            <input id="inventario7" name="infInventario7" type="text" value={dadosEditaveis.infInventario7} onChange={handleChange}/>

            <label htmlFor="inventario8">Extra 2</label>
            <input id="inventario8" name="infInventario8" type="text" value={dadosEditaveis.infInventario8} onChange={handleChange}/>

            <label htmlFor="inventario9">Extra 3</label>
            <input id="inventario9" name="infInventario9" type="text" value={dadosEditaveis.infInventario9} onChange={handleChange}/>
        </div>

        <div>
        <label htmlFor="danobasico">Dano Basico: {dadosEditaveis.atrDanoBasico} </label>
        <label htmlFor="iniciativa">Iniciativa: {dadosEditaveis.atrIniciativa} </label>
        <label htmlFor="sorte">Sorte: {dadosEditaveis.atrSorte} </label>
        <label htmlFor="vitalidade">Vitalidade: {dadosEditaveis.atrVitalidade}</label>
        <label htmlFor="ativacoes">Ativações: {dadosEditaveis.atrAtivacoes}</label>
        <label htmlFor="resistencia">Resistência: {dadosEditaveis.atrResistencia}</label>
        </div>

        <button type="submit">Enviar</button>
    </form>
    
    
    </>)




}