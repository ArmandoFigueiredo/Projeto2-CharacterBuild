import { useState } from "react";
import axios from "axios";

export function FormPrimario() {
    
    const [formPri, setForm] = useState ({
        atrForca:0,
    });

    function handleChange(evento) {
        setForm({...formPri, [evento.target.name]:evento.target.value});
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        console.log("dancinha")
        try{
            const resposta = await axios.post("https://ironrest.herokuapp.com/chrbuilder", formPri)
            console.log("parapar");
        }catch (err){
            console.log(err);
        }
    }


    return(<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="forca">Força</label>
            <input id="forca" name="atrForca" type="number" value={formPri.atrForca} onChange={handleChange}/>
            <button type="submit">Send</button>
        </form>
        
    </>)



}