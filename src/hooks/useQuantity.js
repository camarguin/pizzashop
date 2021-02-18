import { useState } from 'react';

const useQuantity = (defaultQuantity) => {
    const [value, setValue] = useState(defaultQuantity || 1);

    const onChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value);
    }
    return {
        value,
        setValue,
        onChange
    }
}

export default useQuantity;