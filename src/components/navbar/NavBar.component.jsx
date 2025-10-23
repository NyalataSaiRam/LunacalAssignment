import { useRef, useState } from 'react';
import './NavBar.css'

const NavBar = () => {

    const [x, setx] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0)
    const navRef = useRef()

    const handleClick = (e, index) => {
        setActiveIndex(index)
        setx(e.target.getBoundingClientRect().left - navRef.current.getBoundingClientRect().left)


    }

    return (
        <nav>
            <div ref={navRef}>
                <div style={{ left: x }} className='active'></div>
                <Navlink index={1} clickHandler={handleClick} active={activeIndex === 1} text="About Me" />
                <Navlink index={2} clickHandler={handleClick} active={activeIndex === 2} text="Experiences" />
                <Navlink index={3} clickHandler={handleClick} active={activeIndex === 3} text="Recommended" />
            </div>
        </nav>
    )
}

export default NavBar;




const Navlink = ({ text, clickHandler, active, index }) => {
    return (
        <div onClick={(e) => clickHandler(e, index)} className={`btn ${active ? 'no-hover' : ''}`}>{text}</div>
    )
}