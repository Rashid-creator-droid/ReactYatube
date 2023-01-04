import React, {useState} from 'react';
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

    return (
        <div>
            <Header/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>

            <Footer/>
        </div>
    );
};

export default App;