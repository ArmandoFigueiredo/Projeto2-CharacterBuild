import {NavBar} from "../../components/Navbar"
import {Footer} from "../../components/Footer"
import style from "./styles.module.css"
import { Link } from "react-router-dom"

export function Home () {

    return (<div className={style.homePage}>

    <NavBar />
    <div className={style.homeMain}>
        <section className={style.background}></section>
        <div className={style.navCards}>
            <div className={style.navCard}>
                <Link to="/consultpage">
                <h4>Consult Character</h4>
                <div className={style.navImage1} />
                </Link>
            </div>
            <div className={style.navCard}>
                <Link to="/buildpage">
                <h4>Build Character</h4>
                <div className={style.navImage2} />
                </Link>
            </div>
        </div>
    </div>
    <Footer />
    
    </div>) 
 }