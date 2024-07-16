import estilos from "./Avatar.module.css";

export function Avatar({hasBorder = true, src}){

    return(
        <img className={hasBorder ? estilos.avatarWithBotder : estilos.avatar} src = {src} />
    )
}