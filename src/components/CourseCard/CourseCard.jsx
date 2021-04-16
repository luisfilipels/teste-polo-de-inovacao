import './style.css';
import {Link} from "react-router-dom";

const CourseCard = ({img_icon, name, dateCompleted, hours, id}) => {
    const images = require.context('../../', true);

    return (
        <Link to={`/curso/${id}`} className="no-decoration">
            <section className="card container shadowed">
                <div className="card-row flex flex-row">
                    <div className="card-image-box flex">
                        <img className="card-image" src={images('./' + img_icon).default} alt="teste"/>
                    </div>
                    <div className="card-col flex flex-column">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{`Realizado em ${dateCompleted}`}</p>
                        <p className="card-text">{`Carga horária: ${hours} horas`}</p>
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default CourseCard;
