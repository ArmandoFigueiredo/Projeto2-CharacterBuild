import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"



export function CharacterDetail(props) { 
 
  const [detail, setDetail] = useState({}); 
  const [pericia, setPericia] = useState({});
  
  useEffect(() => {
    async function fetchCharacterDetail() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/chrbuilderPrincipal/${props.currFichaId}`
        );
        setDetail(response.data);
        } catch (err) {
        console.log(err);
      }
    }
    fetchCharacterDetail();
  }, [props.currFichaId]);

  useEffect(() => {
    async function fetchPericiaDetail() {
        try {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/chrbuilderPericias/${detail.periciaId}`
            );
            console.log(response)
            setPericia(response.data);
            console.log('>>>>>>>>>>>>>>>>>>>>', pericia);
        }   catch (err) {
            console.log(err)
        }
    }
    fetchPericiaDetail();
  }, [detail])

  return (<div className={style.container}>
    <h1>Detalhes</h1> 
    <div className={style.detail}>
        <div> 
        <img src={detail.atrImagem} />
        </div>
        <section>

        
        <div>
            <p>Nome: {detail.desNome} </p>
            <p>Tipo: {detail.desTipo} </p>
            <p>Jogador: {detail.desJogador} </p>
            <p>Narrador: {detail.desNarrador} </p>
            <p>Campanha: {detail.desCampanha} </p>
            <p>Descrição: {detail.desDescricao} </p>

           <p>Força: {detail.atrForca} </p>
           <p>Destreza: {detail.atrDestreza} </p>
           <p>Const: {detail.atrConst} </p>
           <p>Carisma: {detail.atrCarisma} </p>
           <p>Intel: {detail.atrIntel} </p>
           
            <p>Vontade: {detail.atrVontade} </p>            
            <p>Trunfo1: {detail.desTrunfo1} </p>
            <p>Trunfo2: {detail.desTrunfo2} </p>
            <p>Trunfo3: {detail.desTrunfo3} </p>
            <p>Trunfo4: {detail.desTrunfo4} </p>
            <p>Trunfo5: {detail.desTrunfo5} </p>
            <p>Trunfo6: {detail.desTrunfo6} </p>
            <p>Trunfo7: {detail.desTrunfo7} </p>
            <p>Trunfo8: {detail.desTrunfo8} </p>
            <p>Trunfo9: {detail.desTrunfo9} </p>        
        </div>
        <div>
        <p>Sina1: {detail.desSina1} </p>
        <p>Sina2: {detail.desSina2} </p>
        <p>Sina3: {detail.desSina3} </p>
        <p>Sina4: {detail.desSina4} </p>
        <p>Sina5: {detail.desSina5} </p>

        <p>Inventário1: {detail.infInventario1} </p>
        <p>Inventário2: {detail.infInventario2} </p>
        <p>Inventário3: {detail.infInventario3} </p>
        <p>Inventário4: {detail.infInventario4} </p>
        <p>Inventário5: {detail.infInventario5} </p>
        <p>Inventário6: {detail.infInventario6} </p>
        <p>Inventário7: {detail.infInventario7} </p>
        <p>Inventário8: {detail.infInventario8} </p>
        <p>Inventário9: {detail.infInventario9} </p>

        <p>Dano Básico: {detail.atrDanoBasico} </p>
        <p>Iniciativa: {detail.atrIniciativa} </p>
        <p>Sorte: {detail.atrSorte} </p>
        <p>Vitalidade: {detail.atrVitalidade} </p>
        <p>Ativações: {detail.atrAtivacoes} </p>
        <p>Resistencia: {detail.atrResistencia} </p>                                 
        </div>
        <div>
                <h1>Pericias</h1>
        </div>
        </section>
    </div>  
    </div>
);
}

