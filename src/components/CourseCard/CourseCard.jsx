import './style.css';
import {Link} from "react-router-dom";

/**
 * Shows a single card containing the course's logo, name, the date the user completed it, how many hours it takes, and
 * its ID. When clicked, the user is redirected to the page containing the course's details.
 * @param img_icon Path to the course's icon
 * @param name Name of the course
 * @param date_completed Date in which the user completed the course
 * @param hours How many hours it takes to complete the course
 * @param id ID of the course
 * @returns {JSX.Element}
 */
const CourseCard = ({img_icon, name, date_completed, hours, id}) => {
    const images = require.context('../../', true);

    return (
        <Link to={`/curso/${id}`} className="no-decoration">
            <section className="card flex container shadowed">
                <div className="flex flex-row card-row">
                    <div className="card-image-box flex">
                        <img className="card-image" src={images('./' + img_icon).default} alt="teste"/>
                    </div>
                    <div className="card-col flex flex-column">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{`Realizado em ${date_completed}`}</p>
                        <p className="card-text">{`Carga horária: ${hours} horas`}</p>
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default CourseCard;
