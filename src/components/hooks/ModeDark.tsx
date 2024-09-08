import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { useEffect, useState } from 'react'

function ModeDark() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const handleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <div className="flex items-center pr-4">

            <button
                onClick={handleTheme}
                className="flex items-center mt-2 border border-white rounded-full p1 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <Icon className='text-white' icon="ph:user" width="32" height="32" />
            </button>

        </div>
    )
}

export default ModeDark