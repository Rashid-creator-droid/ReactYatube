import React from 'react';
import PostItems from "./PostItems";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1>{title}</h1>
                {posts.map(post =>
                    <PostItems post={post} key={post.id}/>
                )}
        </div>
    );
};

export default PostList;