import { useState } from "react";
import { Avatar } from "./Avatar";
import estilos from "./Comment.module.css"

import { Trash, ThumbsUp } from "@phosphor-icons/react";

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={estilos.comment}>
            <Avatar hasBorder={false} src="https://github.com/Laquinui.png" />

            <div className={estilos.commentBox}>

                <div className={estilos.commentContent}>
                    <header>
                        <div className={estilos.AuthorAndTime}>
                            <strong>Laerte Quinui</strong>
                            <time dateTime="2022-05-11 08:13:12" title="5 de Junho de 2024">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}