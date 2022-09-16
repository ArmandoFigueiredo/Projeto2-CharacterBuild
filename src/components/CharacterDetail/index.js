import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"
import toast from "react-hot-toast"
import {Link} from "react-router-dom"

export function CharacterDetail(props) { 
  const [detail, setDetail] = useState({}); 
  const [pericia, setPericia] = useState([]); 
 
const {setEditOk}=props

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
            setPericia(response.data.pericias);            
        }   catch (err) {
            console.log(err)
        }
    }
    fetchPericiaDetail();
  }, [detail]);

  function handleToast () {    
    toast((t) => (
      <span>
        Você quer mesmo <b>deletar</b> essa ficha?
        <button onClick={() => {handleDelete ()}}>Sim</button>
        <button onClick={() => toast.dismiss(t.id)}>Não</button>
      </span>
    ));
  }
  
    async function handleDelete(t) {
      console.log(props.currFichaId);
      setDetail({});
      try {
        await axios.delete(
          `https://ironrest.herokuapp.com/chrbuilderPrincipal/${props.currFichaId}`          
        ); 
        await axios.delete(
          `https://ironrest.herokuapp.com/chrbuilderPericias/${detail.periciaId}`          
        ); 
        toast.dismiss(t)      
        } catch (err) {
        console.log(err);
      }
    }


  return ( 
    <div className={style.container}>
    <div className={style.detail}>
          
        <div className={style.cardColumn}>

        <div>
            <h3>Descrição</h3>
            <p>Nome: {detail.desNome} </p>
            <p>Tipo: {detail.desTipo} </p>
            <p>Jogador: {detail.desJogador} </p>
            <p>Narrador: {detail.desNarrador} </p>
            <p>Campanha: {detail.desCampanha} </p>
            <p>Descrição: {detail.desDescricao} </p>
        </div>

        <div> 
          <img src={detail.atrImagem} />
        </div>        

        <div>
        <h3>Inventário</h3>
        <p>Básico: {detail.infInventario1} </p>
        <p>1: {detail.infInventario2} </p>
        <p>2: {detail.infInventario3} </p>
        <p>3: {detail.infInventario4} </p>
        <p>4: {detail.infInventario5} </p>
        <p>5: {detail.infInventario6} </p>
        <p>Extra 1: {detail.infInventario7} </p>
        <p>Extra 2: {detail.infInventario8} </p>
        <p>Extra 3: {detail.infInventario9} </p>
        </div>

        <div className={style.buttons}>
        <div className={style.editBtn}>
          <Link to={`/editpage/${detail._id}`}><button>Editar</button></Link>
        </div>
          <button onClick={() => {handleToast(props.currFichaId)}}>Delete</button>
        </div>
        </div>
        
        <div className={style.cardColumn}> 

        <div>
          <h3>Atributos</h3>
          <p>Força: {detail.atrForca} </p>
          <p>Destreza: {detail.atrDestreza} </p>
          <p>Const: {detail.atrConst} </p>
          <p>Carisma: {detail.atrCarisma} </p>
          <p>Intel: {detail.atrIntel} </p>
          <p>Vontade: {detail.atrVontade} </p>
        </div>

        <div>
          <h3>Secundários</h3>
          <p>Dano Básico: {detail.atrDanoBasico} </p>
          <p>Iniciativa: {detail.atrIniciativa} </p>
          <p>Sorte: {detail.atrSorte} </p>
          <p>Vitalidade: {detail.atrVitalidade} </p>
          <p>Ativações: {detail.atrAtivacoes} </p>
          <p>Resistencia: {detail.atrResistencia} </p>                                 
        </div>        
          
        <div>
            <h3>Trunfos</h3>                   
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
        <h3>Sinas</h3>
        <p>1: {detail.desSina1} </p>
        <p>2: {detail.desSina2} </p>
        <p>3: {detail.desSina3} </p>
        <p>4: {detail.desSina4} </p>
        <p>5: {detail.desSina5} </p>
        
        </div>
        </div>

        <div className={style.cardColumn}>          

          <div className={style.pericia}>
            { pericia.map((currPericia, index) => (
              <div key={index}>
                
              <p>{currPericia.desPericia} x<span>{currPericia.atrPericia}</span></p>
              <div>              
              <label>{currPericia.desEspecial1} x<span>{currPericia.atrEspecial1}</span> </label>
              <label>{currPericia.desEspecial2} x<span>{currPericia.atrEspecial2}</span> </label>
              <label>{currPericia.desEspecial3} x<span>{currPericia.atrEspecial3}</span> </label>
              <label>{currPericia.desEspecial4} x<span>{currPericia.atrEspecial4}</span> </label>
              <label>{currPericia.desEspecial5} x<span>{currPericia.atrEspecial5}</span> </label>
              </div>
              </div>
            ))}
          </div>

        </div>          
<<<<<<< HEAD
    </div>  
=======
    </div>

    <Link to={`/editpage/${detail._id}`}><button>Editar</button></Link>
    
    <button onClick={() => {handleToast(props.currFichaId)}}>Delete</button>
>>>>>>> c11d5cbf4a94cb670d6ac99f0208e19451fd1de6

  </div>
  )
}
          