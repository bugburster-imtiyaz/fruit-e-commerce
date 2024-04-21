import React from 'react';

const Breadcrumbs = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
                        {index !== items.length - 1 ? (
                            <a href={item.url}>{item.text}</a>
                        ) : (
                            item.text
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;
