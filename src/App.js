import React, {useEffect, useState} from 'react';
import './styles/App.css';
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
    const [queryPage, setQueryPage] = React.useState(1);


    return (
        <div>
            <BrowserRouter>
            <Header/>
                <main>
                        <MainPage/>
                </main>
            <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;