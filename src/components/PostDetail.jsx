import React from 'react';

const PostDetail = () => {
    return (
        <div>
            <aside className="col-12 col-md-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Дата публикации:
                    </li>
                    <li className="list-group-item">
                        <a>
                            #Группа
                        </a>
                    </li>
                    <li className="list-group-item">
                        Автор:
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Всего постов автора:
                    </li>
                    <li className="list-group-item">
                        <a>
                            Все посты пользователя
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default PostDetail;
