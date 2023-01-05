import React from 'react';



const PostItems = (props) => {

    const date = props.post.pub_date.split('T')[0];

    console.log(props)
    return (
        <div>
            <article>
                <ul>
                    <li>Автор поста {props.post.author}
                        <a> все посты пользователя</a>
                    </li>
                    <li>Дата публикации: {date}</li>
                </ul>
                <p>{props.post.text}</p>
                <a>Группа {props.post.group}</a><br/>
                <a>Группа {props.post.group}</a>
            </article>
            <hr/>
        </div>
    );
};

export default PostItems;