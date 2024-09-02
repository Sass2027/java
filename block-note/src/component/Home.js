import { Outlet, Link } from "react-router-dom";
import './Home.css';


const Home = ({palette}) => {
    return <div className="content_home">
        <h1>Bienvenue sur <span>BlockNote</span> </h1>
        <p style={{color:palette.tone1}}>l'appli efficace pour garder tes notes</p>
        <Link to={"/new/newnote"} className="starting" style={{background:palette.tone1, color:palette.tone11, borderColor:palette.tone1}}>Commencer à noter</Link>
    </div>
}

export default Home;