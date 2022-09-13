import { useState } from "react";
import axios from "axios";

export function FormDescritivo() {
    
    const [formDes, setForm] = useState ({
        desNome:"",
        // atrDestreza:0,
        // atrConst:0,
        // atrCarisma:0,
        // atrIntel:0,
        // atrVontade:0,
    });

    function handleChange(evento) {
        setForm({...formDes, [evento.target.name]:evento.target.value});
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        console.log("adinam")
        try{
            const resposta = await axios.post("https://ironrest.herokuapp.com/chrbuilder", formDes)
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