import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"



export function CharacterDetail(props) { 
  const [detail, setDetail] = useState({}); 
  const [pericia, setPericia] = useState({});
  
  // useEffect(() => {
  //   async function fetchCharacterDetail1() {
  //     try {
  //       const response = await axios.get(
  //         https://ironrest.herokuapp.com/chrbuilderPrincipal/6321dd0c4bf6cd00178ada57
  //       );
  //       setDetail(response.data);
  //       } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchCharacterDetail1();
  // }, []);

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
  }, [detail]);

  return (<>
  <div className={style.container}>
    <noscript>Detalhes</noscript> 
    <div className={style.detail}>
        <div> 
        <img src={detail.atrImagem} />
        </div>
        <section>
        <div>
            <h4>Descrição</h4>
            <p>Nome: {detail.desNome} </p>
            <p>Tipo: {detail.desTipo} </p>
            <p>Jogador: {detail.desJogador} </p>
            <p>Narrador: {detail.desNarrador} </p>
            <p>Campanha: {detail.desCampanha} </p>
            <p>Descrição: {detail.desDescricao} </p>
        </div>
        <div>
          <h4>Atributos</h4>
          <p>Força: {detail.atrForca} </p>
          <p>Destreza: {detail.atrDestreza} </p>
          <p>Const: {detail.atrConst} </p>
          <p>Carisma: {detail.atrCarisma} </p>
          <p>Intel: {detail.atrIntel} </p>
          <p>Vontade: {detail.atrVontade} </p>
        </div>
        <div>   
            <h4>Trunfos</h4>            
            <p>1: {detail.desTrunfo1} </p>
            <p>2: {detail.desTrunfo2} </p>
            <p>3: {detail.desTrunfo3} </p>
            <p>4: {detail.desTrunfo4} </p>
            <p>5: {detail.desTrunfo5} </p>
            <p>6: {detail.desTrunfo6} </p>
            <p>7: {detail.desTrunfo7} </p>
            <p>8: {detail.desTrunfo8} </p>
            <p>9: {detail.desTrunfo9} </p>        
        </div>
        <div>
            <h4>Sinas</h4>
            <p>1: {detail.desSina1} </p>
            <p>2: {detail.desSina2} </p>
            <p>3: {detail.desSina3} </p>
            <p>4: {detail.desSina4} </p>
            <p>5: {detail.desSina5} </p>
        </div>
        <div>
        <h4>Inventário</h4>
        <p>1: {detail.infInventario1} </p>
        <p>2: {detail.infInventario2} </p>
        <p>3: {detail.infInventario3} </p>
        <p>4: {detail.infInventario4} </p>
        <p>5: {detail.infInventario5} </p>
        <p>6: {detail.infInventario6} </p>
        <p>7: {detail.infInventario7} </p>
        <p>8: {detail.infInventario8} </p>
        <p>9: {detail.infInventario9} </p>
        </div>
        <div>
        <h5>Secund</h5>
        <p>Dano Básico: {detail.atrDanoBasico} </p>
        <p>Iniciativa: {detail.atrIniciativa} </p>
        <p>Sorte: {detail.atrSorte} </p>
        <p>Vitalidade: {detail.atrVitalidade} </p>
        <p>Ativações: {detail.atrAtivacoes} </p>
        <p>Resistencia: {detail.atrResistencia} </p>                                 
        </div>
        <div>
        <hr></hr>
        {/* {pericia.pericias.map((currPerShow)=>{
          return (<>
        <label>{currPerShow.desPericia}</label>
        <label>x{currPerShow.atrPericia} </label>
        <label>{currPerShow.desEspecial1}</label>
        <label>x{currPerShow.atrEspecial1} </label>
        </>)})}; */}
        </div>
        </section>
    </div>
    </div>
    </>
);
}
