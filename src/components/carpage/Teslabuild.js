import './Teslabuild.css'
import Slide from 'react-reveal/Slide'
const Teslabuild = ({img,text}) => {
    return ( 
         <div className="teslabuild-container">
             <div className="teslabuild-textleft">
                 <Slide left>
                 <h3>Safety</h3>
                 <Slide left>
                 <strong>Build For Safety</strong></Slide>
                 <p>{text}</p>
                 <div className="btn-more">
                     <a href="#">Learn More</a>
                 </div></Slide>
             </div>
             <div className="box">
                 <div className="boximg">
                     <img src={img} />
                 </div>
             </div>
         </div>

     );
}
 
export default Teslabuild;