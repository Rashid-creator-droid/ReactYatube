import React, {useEffect, useState} from 'react';
import './styles/App.css';
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import PostDetail from "./components/PostDetail";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import About from "./components/About";
import Technologies from "./components/Technologies";



function App() {
    const [queryPage, setQueryPage] = React.useState(1);


    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/post_detail" element={<PostDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/technologies" element={<Technologies />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;