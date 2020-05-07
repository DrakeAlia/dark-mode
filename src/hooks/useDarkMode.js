import React, { useEffect } from 'react';
// import local storage
import { useLocalStorage } from './useLocalStorage';

// function enables dark mode feature
export const useDarkMode = (value) => {
    const [someValue, setSomeValue] = useLocalStorage('dark', value); 
    useEffect(() => {
        if (someValue) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [someValue]);

    return [someValue, setSomeValue]
}