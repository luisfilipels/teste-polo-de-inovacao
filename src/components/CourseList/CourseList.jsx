import CourseCard from "../CourseCard";
import './style.css'
import Courses from '../../assets/db/cursos'
import {useState} from "react";

/**
 * Returns a list of courses contained in the db.json file, classified in regards to whether the course is completed or
 * not.
 * @param courseType Which kind of course is shown in the list (completed or non-completed courses)
 * @returns {JSX.Element}
 */
const CourseList = ( { courseType } ) => {

    const [courses] = useState(Courses);

    return (
        <ul className="course-list flex-row">
            {
                courses.filter(function (element) {
                    if (courseType === 'concluidos') {
                        return 'dt_realizacao' in element;
                    } else {
                        return !('dt_realizacao' in element);
                    }
                }).map((course, index) => {
                    return (
                        <li key={index}>
                            <CourseCard id={course.id} img_icon={course.img_icon} name={course.nome} date_completed={course.dt_realizacao} hours={course.carga_horaria}/>
                        </li>
                    );
                })
            }
        </ul>
    );

}

export default CourseList;
