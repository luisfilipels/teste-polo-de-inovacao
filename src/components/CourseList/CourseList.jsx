import CourseCard from "../CourseCard";
import './style.css'
import Courses from '../../assets/db/cursos'
import {useState} from "react";

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
                            <CourseCard id={course.id} img_icon={course.img_icon} name={course.nome} dateCompleted={course.dt_realizacao} hours={course.carga_horaria}/>
                        </li>
                    );
                })
            }
        </ul>
    );

}

export default CourseList;
