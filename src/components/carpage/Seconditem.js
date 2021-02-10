import './Item.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Button} from '@material-ui/core'
const SecondItem = ({backgroundimg,text,title,textbottom}) => {
    return ( 
        <div className="container" style={
            {backgroundImage:`url(${backgroundimg})`}}
          >
              <Fade top>
              <div className="title">
                  <p>{title}</p>
              </div>
              <div className="description">
                  <a href="/">{text}</a>
              </div></Fade>
              <Zoom>
              <div className="bottom">
              <div class="buttons1">
              <Button class="btn-one">
              CONFIGURATION PERSONNALISÉE
</Button>
</div>
<Fade>
<div className="text-bottom">
       <p>{textbottom}</p>
   </div></Fade>
 </div></Zoom>
 </div>
     );
}
 
export default SecondItem;