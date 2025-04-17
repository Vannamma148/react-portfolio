import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img loading="lazy" src="/v-logo.png" alt="logo" />
                </div>
                <input type="checkbox" name="" id="menu" />
                <label for="menu" className="menu-icon">&#9776;</label>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skill">Skills</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <a href="#contact"><button type="button" className="avbtn">Hire Me</button></a>

            </header>
        </>
    )
}
