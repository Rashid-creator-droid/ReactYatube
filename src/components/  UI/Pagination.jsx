import React from 'react';

const Pagination = ({children, ...props}) => {
    return (
        <nav aria-label="Page navigation" className="my-5">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link">{children}</a>
                </li>
                </ul>
                </nav>

    );
};

export default Pagination;