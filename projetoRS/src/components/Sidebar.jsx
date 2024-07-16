import { Avatar } from "./Avatar";
import estilos from "./Sidebar.module.css"
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar(){
    return(
        <aside className={estilos.sidebar}>
            <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={estilos.cover}/>
            
            <div className={estilos.profile}>
                <Avatar src="https://github.com/nickstarss.png"/>
                <strong>Giovanni Fiorini</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}