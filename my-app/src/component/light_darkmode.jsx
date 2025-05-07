import useLocalstorage from './useLocalstorage.jsx'

import './theme.css';

function Light_Darkmode() {

    const [theme,setTheme]=useLocalstorage('theme','dark');

    function toggleTheme(){
        setTheme(theme === "light"? "dark": "light");
    }


    return (
    <>

    <div className='light-darkmode' data-theme={theme}>
        <div className='container'>
            <h2>Hello World!!</h2>

            <button onClick={toggleTheme} >{theme==="light"? "🌙 Dark Mode": "☀️ Light Mode"}</button>
        </div>
    </div>
    </>
    );

}

export default Light_Darkmode;