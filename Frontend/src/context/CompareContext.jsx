import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
    const [compareItems, setCompareItems] = useState([]);

    const addToCompare = (newItem) => {
        if (compareItems.length === 10) {
            alert('You can select a maximum of 10 items for comparison.');
        } else {
            const itemExists = compareItems.some((item) => item.title === newItem.title);
            if (itemExists) {
                alert('Item already exists in the compare list');
            } else {
                const updatedCompareItems = [...compareItems, newItem];
                setCompareItems(updatedCompareItems);
                alert("Item Added")
            }
        }
    };
console.log(compareItems);
    return (
        <CompareContext.Provider value={{ compareItems, addToCompare }}>
            {children}
        </CompareContext.Provider>
    );
};


CompareProvider.propTypes = {
    children: PropTypes.node.isRequired,
};