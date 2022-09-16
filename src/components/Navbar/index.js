import { Link } from "react-router-dom";
import style from "./styles.module.css";
export function NavBar(){
    return(<nav className={style.navBar}>
        <h1>Character Building</h1>
        <div>
            <Link to="/consultpage">Consultar</Link>
            <Link to="/buildpage">Criar ficha</Link>
        </div>
        </nav>)
}