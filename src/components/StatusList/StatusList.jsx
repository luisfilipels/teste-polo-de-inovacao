import {Link} from "react-router-dom";
import './style.css';

const StatusList = () => {

    return (
        <ul className="status-list flex flex-row">
            <Link className="status-list-item container colored-green shadowed" to="/cursos/concluidos">
                <li>Concluídos</li>
            </Link>
            <Link className="status-list-item container colored-red shadowed" to="/cursos/nao-concluidos">
                <li>Não Concluídos</li>
            </Link>
        </ul>
    );
}

export default StatusList;
