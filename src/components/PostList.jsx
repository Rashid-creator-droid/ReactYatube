import React from 'react';

const PostList = () => {
    return (
        <div>
            <article>
                <ul>
                    <li>Автор
                        <a> все посты пользователя</a>
                    </li>
                    <li>Дата публикации</li>
                </ul>
                <p>Текст поста</p>
                <a>Подробная информация</a><br/>
                <a>Группа</a>
            </article>
            <hr/>
        </div>
    );
};

export default PostList;