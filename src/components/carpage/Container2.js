import Zoom from 'react-reveal/Zoom'
import './Container2.css'
const Container2 = ({background,title,text}) => {
    return (
         <div className="Container2" style={
            {backgroundImage:`url(${background})`}}>
        <div className="blackscreen"></div>
         <div className="textContainer2">
             <Zoom>
             <h1>{title}</h1>
             <br />
            <p>{text}</p>
            <div className="btncontainer">
              <a href="#">Order Now</a>
           </div>
           </Zoom>
         </div>
         </div>
      );
}
 
export default Container2;