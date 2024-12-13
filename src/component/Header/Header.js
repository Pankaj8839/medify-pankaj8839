import Navbar from "../NavBar/Navbar";
import style from "./Header.module.css"
function Header() {
    return (
        <div className={style.header} >
           <div className={style.text}>
            <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
           </div>
          <Navbar/>
        </div>
    );
}

export default Header