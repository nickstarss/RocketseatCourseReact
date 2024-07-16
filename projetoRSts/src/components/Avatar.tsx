import { ImgHTMLAttributes } from "react";
import estilos from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{ /*a extensão faz com que as propriedades sejam herdadas, deixando de ser necessário */
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props }: AvatarProps){

    return(
        <img 
        className={hasBorder ? estilos.avatarWithBotder : estilos.avatar}
        {...props} /* Tira a necessidade de colocar cada um dos atributos, e ficar tendo que adicionar cada um novamente caso tenha um novo */
        />
    )
}