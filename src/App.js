import React, {useEffect, useState} from 'react';
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import PostService from "./API/PostService";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./components/  UI/Pagination";
import './styles/App.css';



function App() {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    let pagesArray = getPagesArray(totalPages)

    useEffect(() => {
        fetchPosts()
    }, [page])

    async function fetchPosts() {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));

    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div>
            <Header/>
            <PostList posts={posts} title={'Список постов 1'}/>
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span className={page === p ? "page page__current" : "page"} onClick={() => changePage(p)} key={p}>{p}</span>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default App;