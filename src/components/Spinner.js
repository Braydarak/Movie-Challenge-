import { FaSpinner } from 'react-icons/fa';
import "./Spinner.scss";

export function Spinner() {
    return (
        <div className="spinner">
            <FaSpinner className="spinner__icon" size={70} />
        </div>
    )
}