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
      const [right,setright]=useState(false);
     const responsive = () =>{
         setright(!right);
     }
     return (  
         <>
         <nav className={nav ? "scrollwhite" : null}>
             <div className="logo">
                 <Link exact to="/" onClick={()=>{document.title ="TeslaClone"}}><img src={TeslaLogo} /></Link>
             </div>
             <div className="navbar-center" id='navcenter' style={{top: right ? "9%" : "-50%"}}>
                 <Link  to="/modelS" onClick={()=>{document.title ="ModelS";setright(false);setright(false)}}>Model S</Link>
                 <Link  to="/model3"  onClick={()=>{document.title ="Model3";setright(false)}}>Model 3</Link>
                 <Link  to="/modelX" onClick={()=>{document.title ="ModelX";setright(false)}}>Model X</Link>
                 <Link  to="/modelY" onClick={()=>{document.title ="ModelY";setright(false)}}>Model Y</Link>
                 <Link  to="/powerwall" onClick={()=>{document.title ="Powerwall";setright(false)}}>PowerWall</Link>
                 <Link  to="/recharger" onClick={()=>{document.title ="Recharger";setright(false)}}>Recharger</Link>
             </div>
             <div className="navbar-end">
                 <p>Shop</p>
                 <p>Compte Tesla</p>
             </div>
         </nav>
         <div  className="hamburger" onClick={responsive}>
              {!right ? <MenuIcon /> : <CloseIcon />}
             </div>
         </>
    );
}
 
export default Navbar;