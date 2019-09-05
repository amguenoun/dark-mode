import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('light', initialValue);
    const body = document.querySelector('body');
    useEffect(() => {
        if (darkMode) {
            body.classList.add('dark-mode');
        }
        else {
            body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
}

export default useDarkMode;