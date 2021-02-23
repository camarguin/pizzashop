import React from 'react';

import './Sizes.css';

const Sizes = ({ openFood, sizeInput }) => {
    return (
        <div className="Sizes">
            <h3>Size:</h3>
            {/* <label htmlFor="size">Size:</label> */}
            <select name="size" id="size" defaultValue="0" onChange={sizeInput.onChange}>
                <option value="0" disabled hidden>Select Size</option>
                {openFood.sizes.map((size, index) => (
                    <>
                        <option key={index} selected={size.value === size} value={size}>{size}</option>
                    </>
                ))}
            </select>
        </div>
    );
};

export default Sizes;