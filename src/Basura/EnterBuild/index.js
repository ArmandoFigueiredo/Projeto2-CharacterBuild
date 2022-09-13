// import axios from "axios"
// import { useSearchParams } from "react-router-dom";
// import { useState, useEffect } from "react";


// export function EnterBuild (){
//     let novoPersonagem={
//         desNome:"",
//         atrForca: "0",
//         atrDestreza:"0",
//         atrConst:"0",
//         atrCarisma:"0",
//         atrIntel:"0",
//         atrVontade:"0",
//         identificador:"josiasjoaoandremateussouza234"
//     }

//     const [formNP, setForm] = useState(novoPersonagem)

//     useEffect(()=>{
//         async function starter() {
//         try{
//             const starter = await axios.post("https://ironrest.herokuapp.com/chrbuilder", formNP);
//             console.log(starter.data.ops[0]._id)
//             //identPerson=starter.data.ops[0]._id
//         }catch (err){
//             console.log(err);
//         }
//         // try{
//         //     identperson = await axios.get("https://ironrest.herokuapp.com/chrbuilder", novoPersonagem);
//         //     console.log(starter)
//         // }catch (err){
//         //     console.log(err);
//         // }

//     }
    
//     starter();},[]);


//     return(<h1>Oi</h1>)

// }


