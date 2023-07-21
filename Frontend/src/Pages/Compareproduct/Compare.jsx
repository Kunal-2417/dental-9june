import React, { useContext } from 'react';
import { CompareContext } from '../../context/CompareContext';

const Compare = () => {
    const { compareItems } = useContext(CompareContext);

    return (
        <div>
            <h1>Compare Page</h1>
            {compareItems.length > 0 ? (
                compareItems.map((item) => (
                    <div key={item.title}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <p>Total Likes: {item.totalLike}</p>
                        <p>Category: {item.category}</p>
                    </div>
                ))
            ) : (
                <p>No items to compare</p>
            )}
        </div>
    );
};

export default Compare;