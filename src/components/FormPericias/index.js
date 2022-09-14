import { useState , useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";

export function FormPericias(props) {
    
    const [form, setForm] = useState({
        fichaId: "",
        pericias: [],
    });

    const [currentPericia, setCurrentPericia] = useState ({
        desPericia:"",
        atrPericia:0,
        desEspecial1:"",
        desEspecial2:"",
        desEspecial3:"",
        desEspecial4:"",
        desEspecial5:"",
        atrEspecial1:0,
        atrEspecial2:0,
        atrEspecial3:0,
        atrEspecial4:0,
        atrEspecial5:0        
    });

    useEffect(() => {
        setForm({ ...form, fichaId: props.fichaId });
    }, [props.fichaId]);

    
    function handleChange(evento) {
        setCurrentPericia({...currentPericia, [evento.target.name]:evento.target.value});
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        console.log("adinam")
        try{
            const resposta = await axios.post("https://ironrest.herokuapp.com/chrbuilderPericias", form)
            console.log("burbuleos");
        
            await axios.put(`https://ironrest.herokuapp.com/chrbuilderPrincipal/${props.fichaId}`, { periciaId: resposta.data.insertedId }
            );
        
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

    function handleAddPericia() {
        setForm({ ...form, pericias: [...form.pericias, currentPericia] });
    
        console.log(form);
    
        setCurrentPericia({
            desPericia:"",
            atrPericia:0,
            desEspecial1:"",
            desEspecial2:"",
            desEspecial3:"",
            desEspecial4:"",
            desEspecial5:"",
            atrEspecial1:0,
            atrEspecial2:0,
            atrEspecial3:0,
            atrEspecial4:0,
            atrEspecial5:0   
        });
    
        toast('Aee Aeee Apapapapapa!',
        {
            icon: '👽',
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            },
        });
    }
        
    function handleDeletePericia(periciaToDelete) {
        console.log("gasgatsgatsgatstagstagstagstgatstag")
        console.log(periciaToDelete);
        console.log("gasgatsgatsgatstagstagstagstgatstag")
        const newForm = form.pericias.filter((currPericia) => {
        return currPericia !== periciaToDelete;
        });
        console.log(newForm);
        setForm({ ...form, pericias: [...newForm] });
    }

    return(<>
        <div>
            {form.pericias.map((currPericia) => {
                console.log(currPericia);
            return (
                <>
                <strong>{currPericia.desPericia} </strong>
                <label>x{currPericia.atrPericia} </label>
                <label>{currPericia.desEspecial1} </label>
                <label>x{currPericia.atrEspecial1} </label>
                <label>{currPericia.desEspecial2} </label>
                <label>x{currPericia.atrEspecial2} </label>
                <label>{currPericia.desEspecial3} </label>
                <label>x{currPericia.atrEspecial3} </label>
                <label>{currPericia.desEspecial4} </label>
                <label>x{currPericia.atrEspecial4} </label>
                <label>{currPericia.desEspecial5} </label>
                <label>x{currPericia.atrEspecial5} </label>
                <p></p>
                
                <button type="button" onClick={() => {
                handleDeletePericia(currPericia);
                }}>
                Remove
              </button>
            </>
          );
        })}
      </div>


        <form onSubmit={handleSubmit}>
            
            <div id="pericias">
            <hr></hr>
            <label htmlFor="pericia">Pericia</label>
            <input id="pericia" name="desPericia" type="text" value={currentPericia.desPericia} onChange={handleChange}/>
            <input id="valorpericia" name="atrPericia" type="number" value={currentPericia.atrPericia} onChange={handleChange}/>

            <label htmlFor="especial1">Especializações</label>
            <input id="especial1" name="desEspecial1" type="text" value={currentPericia.desEspecial1} onChange={handleChange}/>
            <input id="valorespecial1" name="atrEspecial1" type="number" value={currentPericia.atrEspecial1} onChange={handleChange}/>
            
            <input id="especial2" name="desEspecial2" type="text" value={currentPericia.desEspecial2} onChange={handleChange}/>
            <input id="valorespecial2" name="atrEspecial2" type="number" value={currentPericia.atrEspecial2} onChange={handleChange}/>
            
            <input id="especial3" name="desEspecial3" type="text" value={currentPericia.desEspecial3} onChange={handleChange}/>
            <input id="valorespecial3" name="atrEspecial3" type="number" value={currentPericia.atrEspecial3} onChange={handleChange}/>
            
            <input id="especial4" name="desEspecial4" type="text" value={currentPericia.desEspecial4} onChange={handleChange}/>
            <input id="valorespecial4" name="atrEspecial4" type="number" value={currentPericia.atrEspecial4} onChange={handleChange}/>
            
            <input id="especial5" name="desEspecial5" type="text" value={currentPericia.desEspecial5} onChange={handleChange}/>
            <input id="valorespecial5" name="atrEspecial5" type="number" value={currentPericia.atrEspecial5} onChange={handleChange}/>
            
            </div>

            <button type="button" onClick={handleAddPericia}>Add Pericia</button>
            <button type="submit">Send</button>
            
        </form>
        
    </>)



}