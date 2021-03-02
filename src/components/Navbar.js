import './Navbar.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import TeslaLogo from './carpage/assets/teslaLogoSmall.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Navbar = () => {
      const [nav,setnav]= useState(false);
      const changebackground = () =>{
        if (window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
      }
      window.addEventListener('scroll',changebackground);
     return (  
         <nav className={nav ? "scrollwhite" : null}>
             <div className="logo">
                 <Link exact to="/" onClick={()=>{document.title ="TeslaClone"}}><img src={TeslaLogo} /></Link>
             </div>
             <div className="navbar-center" id='navcenter'>
                 <Link  to="/modelS" onClick={()=>{document.title ="ModelS"}}>Model S</Link>
                 <Link  to="/model3"  onClick={()=>{document.title ="Model3"}}>Model 3</Link>
                 <Link  to="/modelX" onClick={()=>{document.title ="ModelX"}}>Model X</Link>
                 <Link  to="/modelY" onClick={()=>{document.title ="ModelY"}}>Model Y</Link>
                 <Link  to="/powerwall" onClick={()=>{document.title ="Powerwall"}}>PowerWall</Link>
                 <Link  to="/recharger" onClick={()=>{document.title ="Recharger"}}>Recharger</Link>
             </div>
             <div className="navbar-end">
                 <p>Shop</p>
                 <p>Compte Tesla</p>
             </div>
             <div  className="hamburger">
             <MenuIcon />
             </div>
         </nav>
    );
}
 
export default Navbar;