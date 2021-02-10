import './Item.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FiChevronDown } from "react-icons/fi";
import {Button} from '@material-ui/core'
const Item = ({title,text,backgroundimg,textbottom,first}) => {
    return ( 
            <div className="container" style={
              {backgroundImage:`url(${backgroundimg})`}}
            >
                <div  className="title">
                    <Fade top>
                    <p>{title}</p></Fade>
                </div>
                <div  className="description">
                    <Fade>
                    <a href="/">{text}</a></Fade>
                </div>
                <Zoom>
                <div className="bottom">
                <div class="buttons">
                <Button class="btn-one">
                CONFIGURATION PERSONNALISÉE
</Button>
<Button data-aos="zoom-in"  class="btn-two">
VÉHICULES DISPONIBLES
</Button>
</div>
   <div   className="text-bottom">
       <p>{textbottom}</p>
       {first && <FiChevronDown style={{fontSize :"50px",color :"black"}} className="down" />
}
   </div>
   </div></Zoom>
    </div>
     );
}
 
export default Item;