import React from 'react';

const Sizes = ({ openFood, sizeInput }) => {
    return (
        <>
            <h3>Size:</h3>
            <label htmlFor="size">Size:</label>
            <select name="size" id="size" defaultValue="0" onChange={sizeInput.onChange}>
                <option value="0" disabled hidden>Select Size</option>
                {openFood.sizes.map((size, index) => (
                    <>
                        <option key={index} selected={size.value === size} value={size}>{size}</option>
                    </>
                ))}
            </select>
        </>
    );
};

export default Sizes;