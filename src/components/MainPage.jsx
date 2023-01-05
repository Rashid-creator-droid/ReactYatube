import React, {useEffect, useState} from 'react';
import PostList from "./PostList";
import PostService from "../API/PostService";
import {getPageCount, getPages, getPagesArray} from "../utils/pages";
import "../styles/App.css"
import axios from "axios";
import {useFetching} from "../hooks/useFetching";
import Pagination from "./  UI/Pagination";



function MainPage() {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);

    const [fetchPosts] = useFetching(async () => {
        const response = await PostService.getAll(limit, offset);
        setPosts(response.data.results)
        console.log(response.data.results)
        const totalCount = response.data["count"]
        console.log(totalCount)
        setTotalPages(getPageCount(totalCount, limit))
        console.log(setTotalPages)
        })
    let pagesArray = getPagesArray(totalPages);
    useEffect(() => {
        fetchPosts()
    }, [offset, limit])


    const changePage = (offset) => {
        setOffset(getPages(offset))
    }
    return (
        <div>
            <PostList posts={posts} title={'Список постов 1'}/>
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span className={offset === p-1 ? "page page__current" : "page"} onClick={() => changePage(p)} key={p}>{p}</span>
                )}
            </div>
        </div>
    );
 };


export default MainPage;