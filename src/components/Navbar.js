import './Navbar.css'
import {Link} from 'react-router-dom'
import TeslaLogo from './carpage/assets/teslaLogoSmall.svg'
const Navbar = () => {
    return (  
         <nav>
             <div className="logo">
                 <Link exact to="/"><img src={TeslaLogo} /></Link>
             </div>
             <div className="navbar-center">
                 <Link  to="/modelS">Model S</Link>
                 <Link  to="/model3">Model 3</Link>
                 <Link  to="/modelX">Model X</Link>
                 <Link  to="/modelY">Model Y</Link>
                 <Link  to="/powerwall">PowerWall</Link>
                 <Link  to="/recharger">Recharger</Link>
             </div>
             <div className="navbar-end">
                 <p>Shop</p>
                 <p>Compte Tesla</p>
             </div>
         </nav>
    );
}
 
export default Navbar;