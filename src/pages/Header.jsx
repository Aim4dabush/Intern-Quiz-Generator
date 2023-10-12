import '../App.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="nav-bar">
            <h1 id="nav-title">INTERN QUIZ GENERATOR</h1>
            <h2 id="nav-item">
                <Link to={`/`}>HOME</Link>
            </h2>
            <h2 id="nav-item">
                <Link to={`/login`}>LOGIN</Link>
            </h2>
            <h2 id="nav-item">
                <Link to={`/register`}>REGISTER</Link>
            </h2>
        </nav>
    );
}
