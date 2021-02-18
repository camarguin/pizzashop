import { useState } from 'react';

const useSize = (defaultSize) => {
    const [value, setValue] = useState(defaultSize);

    const onChange = (e) => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange
    }
}

export default useSize;