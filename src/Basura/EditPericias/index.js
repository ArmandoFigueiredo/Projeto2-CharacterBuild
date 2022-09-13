import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export function EditPericias() {
    const navigate = useNavigate();
    const {} = useParams();

    const [formDes, setForm] = useState ({
        desNome:"",
        // atrDestreza:0,
        // atrConst:0,
        // atrCarisma:0,
        // atrIntel:0,
        // atrVontade:0,
    });

    useEffect(() => {
        async function fetchTip() {
            try {
                const resposta = await axios.get(`https://ironrest.herokuapp.com/chrbuilder/${}`);
                //delete response.data.
                setForm({...resposta.data});                
            } catch (err) {
                console.log(err)
            }
        }
        fetchTip();
    })

    function handleChange(evento) {
        setForm({...formDes, [evento.target.name]:evento.target.value});
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        console.log("adinam")
        try{
            const resposta = await axios.put(`https://ironrest.herokuapp.com/chrbuilder/${}`, formDes)
            console.log("burbuleos");
        }catch (err){
            console.log(err);
        }
    }


    return(<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="desname">Nome</label>
            <input id="desname" name="desNome" type="text" value={formDes.desNome} onChange={handleChange}/>
{/*             
            <label htmlFor="destreza">Destreza</label>
            <input id="destreza" name="atrDestreza" type="number" value={formDes.atrDestreza} onChange={handleChange}/>
                        
            <label htmlFor="const">Constituição</label>
            <input id="const" name="atrConst" type="number" value={formDes.atrConst} onChange={handleChange}/>
                        
            <label htmlFor="carisma">Carisma</label>
            <input id="carisma" name="atrCarisma" type="number" value={formDes.atrCarisma} onChange={handleChange}/>
                        
            <label htmlFor="intel">Inteligência</label>
            <input id="intel" name="atrIntel" type="number" value={formDes.atrIntel} onChange={handleChange}/>
                        
            <label htmlFor="vontade">Vontade</label>
            <input id="vontade" name="atrVontade" type="number" value={formDes.atrVontade} onChange={handleChange}/>
             */}
            <button type="submit">Send</button>

        </form>    
    </>)    
}