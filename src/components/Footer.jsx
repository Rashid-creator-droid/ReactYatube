import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="border-top text-center py-3">
                <p>© {new Date().getFullYear()} Copyright <span style={{color: 'red'}}>Ya</span>tube</p>
            </footer>
        </div>
    );
};

export default Footer;