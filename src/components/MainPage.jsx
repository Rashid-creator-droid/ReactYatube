import React, {useEffect, useState} from 'react';
import PostList from "./PostList";
import PostService from "../API/PostService";
import {getPageCount, getPagesArray} from "../utils/pages";
import "../styles/App.css"
import axios from "axios";



function MainPage() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/posts/")
        setPosts(response.data)
    }


    return (
        <div>
            <PostList posts={posts} title={'Список постов 1'}/>
        </div>
    );
};

export default MainPage;