import React from 'react';

const PostList = (props) => {
    console.log(props)
    return (
        <div>
            <article>
                <ul>
                    <li>Автор поста {props.post.id}
                        <a> все посты пользователя</a>
                    </li>
                    <li>Дата публикации</li>
                </ul>
                <p>{props.post.body}</p>
                <a>{props.post.title}</a><br/>
                <a>Группа</a>
            </article>
            <hr/>
        </div>
    );
};

export default PostList;