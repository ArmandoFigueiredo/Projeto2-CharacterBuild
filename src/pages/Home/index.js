import {NavBar} from "../../components/Navbar"
import {Footer} from "../../components/Footer"
import style from "./styles.module.css"

export function Home () {

    return (<div className={style.homePage}>

    <NavBar />

    <section className={style.background}></section>
    <Footer />
    
    </div>) 
 }