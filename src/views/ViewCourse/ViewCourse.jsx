import { useParams, useHistory } from 'react-router-dom'
import {useState} from "react";
import Courses from '../../assets/db/cursos'
import './style.css'

/**
 * Shows one specific course, with a specific ID
 * @returns {JSX.Element}
 */
const ViewCourse = () => {

    let history = useHistory();
    const { id } = useParams();

    const [courses] = useState(Courses);
    const images = require.context('../../', true);

    let currentCourse = null;
    for (let i = 0; i < courses.length; i++) {
        console.log(courses[i]);
        if (courses[i].id == id) currentCourse = courses[i];
    }
    if (currentCourse == null) {
        history.push('/404');
        return (<></>);
    }

    return (
        <main className="view-course-container display-container container shadowed flex flex-column">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div className="flex flex-row view-course-center">
                <img className="view-course-image" src={images('./' + currentCourse.img_icon).default} alt="Logo do curso"/>
                <h2 className="display-container-title">{currentCourse.nome}</h2>
            </div>
            <div className="flex flex-row view-course-section">
                <span className="material-icons view-course-icon">event</span>
                <h3 className="view-course-section-name">Curso realizado em: </h3>
                <p className="view-course-text">{currentCourse.dt_realizacao}</p>
            </div>
            <hr className="solid"/>
            <div className="flex flex-row view-course-section">
                <span className="material-icons view-course-icon">schedule</span>
                <h3 className="view-course-section-name">Carga horária: </h3>
                <p className="view-course-text">{currentCourse.carga_horaria + " horas"}</p>
            </div>
            <hr className="solid"/>
            <div className="flex flex-row view-course-section">
                <span className="material-icons view-course-icon">face</span>
                <h3 className="view-course-section-name">Facilitador: </h3>
                <p className="view-course-text">{currentCourse.professor}</p>
            </div>
            <hr className="solid"/>
            <div className="flex flex-column">
                <div className="flex flex-row view-course-section">
                    <span className="material-icons view-course-icon">description</span>
                    <h3 className="view-course-section-name">Conteúdo: </h3>
                </div>
                <ul className="view-course-ul">
                    {
                        currentCourse.conteudo.map((subject, index) => {
                            return <li key={index} className="view-course-text">{subject}</li>
                        })
                    }
                </ul>
            </div>
        </main>
    );

}

export default ViewCourse
