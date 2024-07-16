import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import estilos from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string
}

export interface PostType{
    id: number,
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({post}: PostProps){

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
    ])

    const [newCommentText, setNewCommentText] = useState('')

    console.log(newCommentText);

    const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault() /*para prevenir que ele queira redirecionar para outra página*/
        
        setComments([...comments, newCommentText]) /*...comments vai copiar o array já existente*/
        setNewCommentText('');

    }

    function handleNewCOmmentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity(''); 
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: String){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
       event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={estilos.post}>
            <header>
                <div className={estilos.author}>
                    <Avatar src= {post.author.avatarUrl} hasBorder/>
                    <div className={estilos.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div> 
                </div>

                <time dateTime={publishedDateFormated} title="5 de Junho de 2024">
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={estilos.content}>
                {post.content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={estilos.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCOmmentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>

            <div className={estilos.commentList}>
                {comments.map(comment => {
                    return <Comment 
                        key={comment} 
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                })}
            </div>
        </article>
    )
}