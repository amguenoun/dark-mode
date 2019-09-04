import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const item = window.localStorage.getItem(key);

    const [storedValue, setStoredValue] = useState(() => {
        return item ? JSON.parse(item) : initialValue;
    });

    const updateValue = (newValue) => {
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
    }

    return [storedValue, updateValue];
}

export default useLocalStorage;