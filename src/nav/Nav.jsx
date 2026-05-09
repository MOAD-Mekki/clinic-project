import './Nav.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Nav(){
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className='nav'>
            <h1>Clinic</h1>
            <p onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light"}</p>
        </div>
    );
}