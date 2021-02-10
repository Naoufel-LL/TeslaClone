import './HeaderPage.css'
import Zoom from 'react-reveal/Zoom';
const NextHeader = ({background,title}) => {
    return ( 
        <div className="next-header" style={
            {backgroundImage:`url(${background})`}}>
              <div className="next-header-title" >
                  <Zoom>
                    <h1 style={{color:'white'}}>{title}</h1>
                   </Zoom>
                  </div>          
            </div>
     );
}
 
export default NextHeader;