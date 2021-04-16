import {Link} from "react-router-dom";
import logo from '../../logo.svg'
import './style.css'

const Header = () => {
    return (
        <header className="flex flex-row fixed-header shadowed">
            <Link className="header-logo" to="/">
                <img src={logo} alt="Logo do React" style={
                    {animation: "spin 8s linear infinite"}
                }/>
            </Link>
            <Link className="header-title" to="/">
                <h1 >Cursos em React</h1>
            </Link>
        </header>
    );
}

export default Header;
