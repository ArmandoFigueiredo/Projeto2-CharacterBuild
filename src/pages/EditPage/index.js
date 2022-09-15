import axios from "axios";
import { useState, useEffect } from "react";
import { AttributesEdit } from "../../components/AttributesEdit";

export function EditPage () {
    return (<>
    <h1>Editando</h1>
    <div>
        <AttributesEdit />
    </div>
    
    </>)
}