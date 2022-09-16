import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export function PericiasEdit ({pericId}){
    
    const [periciasEdit, setPericiasEdit] = useState ({
        fichaId:"",
        pericias:[]
    })

    const [formPericia, setFormPericia] = useState({
        fichaId:"",
        pericias: []
    });
    
    useEffect(()=>{
        
        async function fetchPerEdit(){
            try{
            
            const response = await axios.get(`https://ironrest.herokuapp.com/chrbuilderPericias/${pericId}`);
            setFormPericia(response.data);
            console.log(response.data)

            } catch (err) {
                console.log (err)
            }
        }
        fetchPerEdit();
    },[])

    function handleChange(evento) {
        setPericiasEdit({...periciasEdit, [evento.target.name]:evento.target.value});
    }

function handleAddPericia(e) {
    e.preventDefault();
    setFormPericia({ ...formPericia, pericias: [...formPericia.pericias, periciasEdit] });

    setPericiasEdit({
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
    const newForm = formPericia.pericias.filter((currPericia) => {
    return currPericia !== periciaToDelete;
    });
    console.log(newForm);
    setFormPericia({ ...formPericia, pericias: [...newForm] });
}

async function handleSubmitter(evento) {
    evento.preventDefault();
    delete formPericia._id
    console.log("adinam")
    try{
        const resposta = await axios.put(`https://ironrest.herokuapp.com/chrbuilderPericias/${pericId}`, formPericia)
        console.log("burbuleos");
        
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

return(<>
    <div>
        {formPericia.pericias.map((currPericia)=>{
            
            return (<>
            <div>
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
                Deletar
            </button>
            </div>
            </>
            )
        })}
    </div>
    <form onSubmit={handleSubmitter}>
            <div>
                <input id="periciaEdit" name="desPericia" type="text" value={periciasEdit.desPericia} onChange={handleChange}/>
                <input id="valorpericiaEdit" name="atrPericia" type="number" value={periciasEdit.atrPericia} onChange={handleChange}/>
            </div>
            <div>
                <input id="espEdit" name="desEspecial1" type="text" value={periciasEdit.desEspecial1} onChange={handleChange}/>
                <input id="valorespEdit" name="atrEspecial1" type="number" value={periciasEdit.atrEspecial1} onChange={handleChange}/>

                <input id="espEdit" name="desEspecial2" type="text" value={periciasEdit.desEspecial2} onChange={handleChange}/>
                <input id="valorespEdit" name="atrEspecial2" type="number" value={periciasEdit.atrEspecial2} onChange={handleChange}/>

                <input id="espEdit" name="desEspecial3" type="text" value={periciasEdit.desEspecial3} onChange={handleChange}/>
                <input id="valorespEdit" name="atrEspecial3" type="number" value={periciasEdit.atrEspecial3} onChange={handleChange}/>

                <input id="espEdit" name="desEspecial4" type="text" value={periciasEdit.desEspecial4} onChange={handleChange}/>
                <input id="valorespEdit" name="atrEspecial4" type="number" value={periciasEdit.atrEspecial4} onChange={handleChange}/>

                <input id="espEdit" name="desEspecial5" type="text" value={periciasEdit.desEspecial5} onChange={handleChange}/>
                <input id="valorespEdit" name="atrEspecial5" type="number" value={periciasEdit.atrEspecial5} onChange={handleChange}/>
            </div>
            <button onClick={handleAddPericia}>Adicionar Pericia</button>
            <p></p>
            <button type="submit">Send</button>
    </form>
    
    
    </>)
}





{/*   function handlePericia(currentP){
        curP=currentP
        console.log(curP)
        return(<>
        
        </>) }                        */}
