import { useState } from "react";
import axios from "axios";

export function FormPericias() {
    
    const [formPer, setForm] = useState ({
        desPericia1:"",
        atrPericia1:0,
        desEspecial11:"",
        desEspecial12:"",
        desEspecial13:"",
        desEspecial14:"",
        desEspecial15:"",
        atrEspecial11:0,
        atrEspecial12:0,
        atrEspecial13:0,
        atrEspecial14:0,
        atrEspecial15:0,
    });

    function handleChange(evento) {
        setForm({...formPer, [evento.target.name]:evento.target.value});
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        console.log("adinam")
        try{
            const resposta = await axios.post("https://ironrest.herokuapp.com/chrbuilderPericias", formPer)
            console.log("burbuleos");
        }catch (err){
            console.log(err);
        }
    }


    return(<>
        <form onSubmit={handleSubmit}>
            
            <div id="pericias1">
            
            <label htmlFor="pericia1">Pericia</label>
            <input id="pericia1" name="desPericia1" type="text" value={formPer.desPericia1} onChange={handleChange}/>
            <input id="valorpericia1" name="atrPericia1" type="number" value={formPer.atrPericia1} onChange={handleChange}/>

            <label htmlFor="especial11">Especializações</label>
            <input id="especial11" name="desEspecial11" type="text" value={formPer.desEspecial11} onChange={handleChange}/>
            <input id="valorespecial11" name="atrEspecial11" type="number" value={formPer.atrEspecial11} onChange={handleChange}/>

            <label htmlFor="especial12">Especializações</label>
            <input id="especial12" name="desEspecial12" type="text" value={formPer.desEspecial12} onChange={handleChange}/>
            <input id="valorespecial12" name="atrEspecial12" type="number" value={formPer.atrEspecial12} onChange={handleChange}/>
            
            <label htmlFor="especial13">Especializações</label>
            <input id="especial13" name="desEspecial13" type="text" value={formPer.desEspecial13} onChange={handleChange}/>
            <input id="valorespecial13" name="atrEspecial13" type="number" value={formPer.atrEspecial13} onChange={handleChange}/>
            
            <label htmlFor="especial14">Especializações</label>
            <input id="especial14" name="desEspecial14" type="text" value={formPer.desEspecial14} onChange={handleChange}/>
            <input id="valorespecial14" name="atrEspecial14" type="number" value={formPer.atrEspecial14} onChange={handleChange}/>
            
            <label htmlFor="especial15">Especializações</label>
            <input id="especial15" name="desEspecial15" type="text" value={formPer.desEspecial15} onChange={handleChange}/>
            <input id="valorespecial15" name="atrEspecial15" type="number" value={formPer.atrEspecial15} onChange={handleChange}/>
            
            </div>

            <button type="submit">Send</button>
            
        </form>
        
    </>)



}