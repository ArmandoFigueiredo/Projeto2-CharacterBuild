import axios from "axios";
import { useState, useEffect } from "react";
import { AttributesEdit } from "../../components/AttributesEdit";

export function EditPage (props) {
    const idAtual=props.currFichaId
    console.log(idAtual)
    console.log("jsajsiajsijaisjiaj")
    return (<>
    <h1>Editando</h1>
    
    <div>
        <AttributesEdit idEdit={idAtual}/>
    </div>
    
    </>)
}