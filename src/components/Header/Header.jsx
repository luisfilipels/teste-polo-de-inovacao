import {Link} from "react-router-dom";
import logo from '../../logo.svg'
import './style.css'

/**
 * This component returns the header used in the site, containing the site's name, and React's logo. Both are links,
 * and lead to the root portion of the site
 * @returns {JSX.Element}
 */
const Header = () => {
    return (
        <header className="flex flex-row fixed-header shadowed">
            <Link className="header-logo" to="/">
                <img src={logo} alt="Logo do React" style={
                    {animation: "spin 8s linear infinite"}
                }/>
            </Link>
            <Link className="header-title" to="/">
                <h1 >Cursos em React!!!</h1>
            </Link>
        </header>
    );
}

export default Header;
