import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./style.module.css";


export function FormPrimario(props) {
    
    const [formPri, setForm] = useState ({
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
        atrResistencia:1
    });

    const [atributosSecundarios, setAtributosSecundarios]= useState({
        danoBasico:0,
        iniciativa:0,
        sorte:0,
        vitalidade:0,
        ativacoes:0,
        resistencia:0
    });

    function handleChange(evento) {
        setForm({...formPri, [evento.target.name]:evento.target.value});
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        console.log("dancinha")
        try{
            const resposta = await axios.post("https://ironrest.herokuapp.com/chrbuilderPrincipal", formPri)
            console.log(resposta);

        props.setFichaId(resposta.data.insertedId)
        console.log(resposta.data.insertedId)
        props.setLiber(true);
        
        toast('Apapapa Aee!',
                {
                    icon: '💩',
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
);

        }catch (err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        setForm({...formPri, atrDanoBasico:1+Number(`${formPri.atrForca}`)});
        },[formPri.atrForca]);
    
    useEffect(()=>{
        setForm({...formPri, atrIniciativa:1+Number(`${formPri.atrDestreza}`)});
        },[formPri.atrDestreza]);
        
    useEffect(()=>{
        setForm({...formPri, atrSorte:3+Number(`${formPri.atrCarisma}`)});
        },[formPri.atrCarisma]);

    useEffect(()=>{
        setForm({...formPri, atrVitalidade:5+(3*Number(`${formPri.atrConst}`))});
        },[formPri.atrConst]);

    useEffect(()=>{
        setForm({...formPri, atrAtivacoes:5+(3*Number(`${formPri.atrIntel}`))});
        },[formPri.atrIntel]);

    useEffect(()=>{
        setForm({...formPri, atrResistencia:1+(2*Number(`${formPri.atrVontade}`))});
        },[formPri.atrVontade])
            
    
    return(<>
    <form onSubmit={handleSubmit} className={style.form1}>
        <div className={style.fichaBuild} >
            <h1>Ficha</h1>
            <label htmlFor="nome" >Nome</label>
            <input class="form-control" name="desNome" type="text" value={formPri.desNome} onChange={handleChange}/>
            
            <label htmlFor="tipo">Tipo</label>
            <input class="form-control" id="tipo" name="desTipo" type="text" value={formPri.desTipo} onChange={handleChange}/>
                        
            <label htmlFor="jogador">Jogador</label>
            <input class="form-control" id="jogador" name="desJogador" type="text" value={formPri.desJogador} onChange={handleChange}/>
                        
            <label htmlFor="narrador">Narrador</label>
            <input class="form-control" id="narrador" name="desNarrador" type="text" value={formPri.desNarrador} onChange={handleChange}/>
                        
            <label  htmlFor="campanha">Campanha</label>
            <input class="form-control" id="campanha" name="desCampanha" type="text" value={formPri.desCampanha} onChange={handleChange}/>
                        
            <label htmlFor="descricao">Descrição</label>
            <input class="form-control" id="descricao" name="desDescricao" type="text" value={formPri.desDescricao} onChange={handleChange}/>

            <label htmlFor="imagem">Imagem</label>
            <input class="form-control" id="Imagem" name="atrImagem" type="text" value={formPri.atrImagem} onChange={handleChange}/>
        </div>

        <div className={style.fichaAtributos}>
            <h2>Atributos</h2>
            <label htmlFor="forca">For </label>
            <input class="form-control" id="forca" name="atrForca" type="number" value={formPri.atrForca} onChange={handleChange}/>
            
            <label htmlFor="destreza">Des </label>
            <input class="form-control" id="destreza" name="atrDestreza" type="number" value={formPri.atrDestreza} onChange={handleChange}/>
                        
            <label htmlFor="const">Con </label>
            <input class="form-control" id="const" name="atrConst" type="number" value={formPri.atrConst} onChange={handleChange}/>
                        
            <label htmlFor="carisma">Car </label>
            <input class="form-control" id="carisma" name="atrCarisma" type="number" value={formPri.atrCarisma} onChange={handleChange}/>
                        
            <label htmlFor="intel">Int </label>
            <input class="form-control" id="intel" name="atrIntel" type="number" value={formPri.atrIntel} onChange={handleChange}/>
                        
            <label htmlFor="vontade">Von </label>
            <input class="form-control" id="vontade" name="atrVontade" type="number" value={formPri.atrVontade} onChange={handleChange}/>
        </div>

        <div className={style.fichaTrunfos}>
            <h2>Trunfos</h2>
            <label htmlFor="trunfo1">1</label>
            <input class="form-control" id="trunfo1" name="desTrunfo1" type="text" value={formPri.desTrunfo1} onChange={handleChange}/>         

            <label htmlFor="trunfo2">2</label>
            <input class="form-control" id="trunfo2" name="desTrunfo2" type="text" value={formPri.desTrunfo2} onChange={handleChange}/>

            <label htmlFor="trunfo3">3</label>
            <input class="form-control" id="trunfo3" name="desTrunfo3" type="text" value={formPri.desTrunfo3} onChange={handleChange}/>

            <label htmlFor="trunfo4">4</label>
            <input class="form-control" id="trunfo4" name="desTrunfo4" type="text" value={formPri.desTrunfo4} onChange={handleChange}/>

            <label htmlFor="trunfo5">5</label>
            <input class="form-control" id="trunfo5" name="desTrunfo5" type="text" value={formPri.desTrunfo5} onChange={handleChange}/>

            <label htmlFor="trunfo6">6</label>
            <input class="form-control" id="trunfo6" name="desTrunfo6" type="text" value={formPri.desTrunfo6} onChange={handleChange}/>

            <label htmlFor="trunfo7">7</label>
            <input class="form-control" id="trunfo7" name="desTrunfo7" type="text" value={formPri.desTrunfo7} onChange={handleChange}/>

            <label htmlFor="trunfo8">8</label>
            <input class="form-control" id="trunfo8" name="desTrunfo8" type="text" value={formPri.desTrunfo8} onChange={handleChange}/>

            <label htmlFor="trunfo9">9</label>
            <input class="form-control" id="trunfo9" name="desTrunfo9" type="text" value={formPri.desTrunfo9} onChange={handleChange}/>
        </div>

        <div className={style.fichaSinas}>
            <h2>Sinas</h2>
            <label htmlFor="sina1">1</label>
            <input class="form-control" id="sina1" name="desSina1" type="text" value={formPri.desSina1} onChange={handleChange}/>
            
            <label htmlFor="sina2">2</label>
            <input class="form-control" id="sina2" name="desSina2" type="text" value={formPri.desSina2} onChange={handleChange}/>

            <label htmlFor="sina3">3</label>
            <input class="form-control" id="sina3" name="desSina3" type="text" value={formPri.desSina3} onChange={handleChange}/>

            <label htmlFor="sina4">4</label>
            <input class="form-control" id="sina4" name="desSina4" type="text" value={formPri.desSina4} onChange={handleChange}/>

            <label htmlFor="sina5">5</label>
            <input class="form-control" id="sina5" name="desSina5" type="text" value={formPri.desSina5} onChange={handleChange}/>
        </div>

        <div className={style.fichaInventorio}>
            <h2>Inventório</h2>
            <label htmlFor="inventario1">Slot Básico</label>
            <input class="form-control" id="inventario1" name="infInventario1" type="text" value={formPri.infInventario1} onChange={handleChange}/>
            
            <label htmlFor="inventario2">1</label>
            <input class="form-control" id="inventario2" name="infInventario2" type="text" value={formPri.infInventario2} onChange={handleChange}/>

            <label htmlFor="inventario3">2</label>
            <input class="form-control" id="inventario3" name="infInventario3" type="text" value={formPri.infInventario3} onChange={handleChange}/>

            <label htmlFor="inventario4">3</label>
            <input class="form-control" id="inventario4" name="infInventario4" type="text" value={formPri.infInventario4} onChange={handleChange}/>

            <label htmlFor="inventario5">4</label>
            <input class="form-control" id="inventario5" name="infInventario5" type="text" value={formPri.infInventario5} onChange={handleChange}/>

            <label htmlFor="inventario6">5</label>
            <input class="form-control" id="inventario6" name="infInventario6" type="text" value={formPri.infInventario6} onChange={handleChange}/>

            <label htmlFor="inventario7">Extra 1</label>
            <input class="form-control" id="inventario7" name="infInventario7" type="text" value={formPri.infInventario7} onChange={handleChange}/>

            <label htmlFor="inventario8">Extra 2</label>
            <input class="form-control" id="inventario8" name="infInventario8" type="text" value={formPri.infInventario8} onChange={handleChange}/>

            <label htmlFor="inventario9">Extra 3</label>
            <input class="form-control" id="inventario9" name="infInventario9" type="text" value={formPri.infInventario9} onChange={handleChange}/>
        </div>

        <div className={style.fichaSecundarios}>
        <label htmlFor="danobasico">Db.: {formPri.atrDanoBasico} </label>
        <label htmlFor="iniciativa">In.: {formPri.atrIniciativa} </label>
        <label htmlFor="sorte">Sor.: {formPri.atrSorte} </label>
        <label htmlFor="vitalidade">Vit.: {formPri.atrVitalidade}</label>
        <label htmlFor="ativacoes">Ati.: {formPri.atrAtivacoes}</label>
        <label htmlFor="resistencia">Res.: {formPri.atrResistencia}</label>
        </div>

        {/* <div>
            {atributosSecundarios.map((currSecundario)=>{
                return (<>
                <label>{currSecundario}</label>
                </>)
            })
            }
        </div> */}

        <button type="submit">Send</button>

    </form>

   
</>)

    }









    // setAtributosSecundarios({...atributosSecundarios, 
        //     danoBasico:Number(`${formPri.atrDanoBasico}`), 
        //     iniciativa:Number(`${formPri.atrIniciativa}`),
        //     sorte:Number(`${formPri.atrSorte}`),
        //     vitalidade:Number(`${formPri.atrVitalidade}`),
        //     ativacoes:Number(`${formPri.atrAtivacoes}`), 
        //     resistencia:Number(`${formPri.atrResistencia}`)
        // })
        //console.log(atributosSecundarios.danoBasico);
        //console.log("anananansiansianainsiansianisnaisin")