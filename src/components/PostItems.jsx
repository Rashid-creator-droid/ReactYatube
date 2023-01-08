import React from 'react';
import PostDetail from "./PostDetail";
import ButtonPost from "./  UI/Button-post";
import {Link} from "react-router-dom";



const PostItems = (props) => {

    const date = props.post.pub_date.split('T')[0];
    const isgroup = props.post.group;

    console.log(props)
    return (
        <div>
            <article>
                <ul>
                    <li>Автор поста {props.post.author}<br/>
                        <a> все посты пользователя</a>
                    </li>
                    <li>Дата публикации: {date}</li>
                </ul>
                <p>{props.post.text}</p>
                 <Link to="/post_detail">Детали поста</Link><br/>
                {isgroup != null &&
                <a>#{props.post.group}</a>
                }
            </article>
            <hr/>
        </div>
    );
};

export default PostItems;