import './style.css'

/**
 * View shown when the user accesses a non-existing page.
 * @returns {JSX.Element}
 */
const NotFound = () => {
    return (
        <main className="not-found-main flex flex-column">
            <h1 className="not-found-code">404</h1>
            <p className="not-found-message">Ops! Essa página não existe!</p>
        </main>
    );
}

export default NotFound;
