import './style.css'
import CourseList from "../../components/CourseList";
import StatusList from "../../components/StatusList";

const ListCourses = ({ type }) => {

    const getCourseText = e => {
        var start = "Seus cursos ";
        switch (type.trim().toLowerCase()) {
            case "concluidos":
                return start + "concluídos";
            case "nao-concluidos":
                return start + "não concluidos";
            default:
                return start;
        }
    }

    return(
        <main>
            <div className="display-container container shadowed">
                <h2 className="display-container-title">{getCourseText()}</h2>
            </div>
            <StatusList/>
            <CourseList courseType={type.trim().toLowerCase()}/>
        </main>
    );

}

export default ListCourses;
