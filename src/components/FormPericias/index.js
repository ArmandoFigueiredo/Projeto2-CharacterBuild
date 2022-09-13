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
        desPericia2:"",
        atrPericia2:0,
        desEspecial21:"",
        desEspecial22:"",
        desEspecial23:"",
        desEspecial24:"",
        desEspecial25:"",
        atrEspecial21:0,
        atrEspecial22:0,
        atrEspecial23:0,
        atrEspecial24:0,
        atrEspecial25:0,
        desPericia3:"",
        atrPericia3:0,
        desEspecial31:"",
        desEspecial32:"",
        desEspecial33:"",
        desEspecial34:"",
        desEspecial35:"",
        atrEspecial31:0,
        atrEspecial32:0,
        atrEspecial33:0,
        atrEspecial34:0,
        atrEspecial35:0,
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

            <div id="pericias2">
            
            <label htmlFor="pericia2">Pericia</label>
            <input id="pericia2" name="desPericia2" type="text" value={formPer.desPericia2} onChange={handleChange}/>
            <input id="valorpericia2" name="atrPericia2" type="number" value={formPer.atrPericia2} onChange={handleChange}/>

            <label htmlFor="especial21">Especializações</label>
            <input id="especial21" name="desEspecial21" type="text" value={formPer.desEspecial21} onChange={handleChange}/>
            <input id="valorespecial21" name="atrEspecial21" type="number" value={formPer.atrEspecial21} onChange={handleChange}/>

            <label htmlFor="especial22">Especializações</label>
            <input id="especial22" name="desEspecial22" type="text" value={formPer.desEspecial22} onChange={handleChange}/>
            <input id="valorespecial22" name="atrEspecial22" type="number" value={formPer.atrEspecial22} onChange={handleChange}/>
            
            <label htmlFor="especial23">Especializações</label>
            <input id="especial23" name="desEspecial23" type="text" value={formPer.desEspecial23} onChange={handleChange}/>
            <input id="valorespecial23" name="atrEspecial23" type="number" value={formPer.atrEspecial23} onChange={handleChange}/>
            
            <label htmlFor="especial24">Especializações</label>
            <input id="especial24" name="desEspecial24" type="text" value={formPer.desEspecial24} onChange={handleChange}/>
            <input id="valorespecial24" name="atrEspecial24" type="number" value={formPer.atrEspecial24} onChange={handleChange}/>
            
            <label htmlFor="especial25">Especializações</label>
            <input id="especial25" name="desEspecial25" type="text" value={formPer.desEspecial25} onChange={handleChange}/>
            <input id="valorespecial25" name="atrEspecial25" type="number" value={formPer.atrEspecial25} onChange={handleChange}/>
            
            </div>

            <div id="pericias3">
            
            <label htmlFor="pericia3">Pericia</label>
            <input id="pericia3" name="desPericia3" type="text" value={formPer.desPericia3} onChange={handleChange}/>
            <input id="valorpericia3" name="atrPericia3" type="number" value={formPer.atrPericia3} onChange={handleChange}/>

            <label htmlFor="especial31">Especializações</label>
            <input id="especial31" name="desEspecial31" type="text" value={formPer.desEspecial31} onChange={handleChange}/>
            <input id="valorespecial31" name="atrEspecial31" type="number" value={formPer.atrEspecial31} onChange={handleChange}/>

            <label htmlFor="especial32">Especializações</label>
            <input id="especial32" name="desEspecial32" type="text" value={formPer.desEspecial32} onChange={handleChange}/>
            <input id="valorespecial32" name="atrEspecial32" type="number" value={formPer.atrEspecial32} onChange={handleChange}/>
            
            <label htmlFor="especial33">Especializações</label>
            <input id="especial33" name="desEspecial33" type="text" value={formPer.desEspecial33} onChange={handleChange}/>
            <input id="valorespecial33" name="atrEspecial33" type="number" value={formPer.atrEspecial33} onChange={handleChange}/>
            
            <label htmlFor="especial34">Especializações</label>
            <input id="especial34" name="desEspecial34" type="text" value={formPer.desEspecial34} onChange={handleChange}/>
            <input id="valorespecial34" name="atrEspecial34" type="number" value={formPer.atrEspecial34} onChange={handleChange}/>
            
            <label htmlFor="especial35">Especializações</label>
            <input id="especial35" name="desEspecial35" type="text" value={formPer.desEspecial35} onChange={handleChange}/>
            <input id="valorespecial35" name="atrEspecial35" type="number" value={formPer.atrEspecial35} onChange={handleChange}/>
            
            </div>

            <button type="submit">Send</button>
            
        </form>
        
    </>)



}