import React, { useEffect, useState } from 'react'
import { themes } from '../data'
import ThemeItem from './ThemeItem'
import { IoIosColorPalette } from 'react-icons/io'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import './theme.css'

const Theme = () => {
    const[showSwitcher, setshowSwitcher] = useState(false);
    const[color,setcolor] = useState('');
    const[theme,settheme] = useState('light-theme');

    const changeColor = (color) => {
        setcolor(color);
    }

    const toogleTheme = () => {
        if(theme==='light-theme'){
            settheme('dark-theme')
        }
        else{
            settheme('light-theme')
        }
    }

    useEffect(()=>{
        document.documentElement.style.setProperty('--first-color',color);
        localStorage.setItem('color',color);
    },[color])

    useEffect(()=>{
        document.documentElement.className = theme;
    },[theme])

    return (
        <div>
            <div className={`${showSwitcher ? 'show_switcher' : ''} style_switcher`}>
                <div className="style_switcher-toggler" onClick={()=> setshowSwitcher(!showSwitcher)}>
                    <IoIosColorPalette/>
                </div>

                <div className="theme_toggler" onClick={toogleTheme}>
                    {theme==='light-theme' ? <BsMoonFill/> : <BsSunFill/>}
                </div>

                <h3 className="style_switcher-title">Style Switcher</h3>
                <div className="style_switcher-items">
                    {themes.map((theme, index)=>{
                        return (
                            <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                        )
                    })}
                </div>
                <div className="style_switcher-close" onClick={()=>setshowSwitcher(!showSwitcher)}>&times;</div>
            </div>
        </div>
    )
}

export default Theme