import './HeaderPage.css'
import Fade from 'react-reveal/Fade'
import svg from './teslaimg/icon.solar_.svg'
import { AiOutlineMessage } from "react-icons/ai";
import CountUp from 'react-countup'

const HeaderPage = ({background,title,description,range,speed,time,horsepower,first,second}) => {
    return ( 
        <div className="over">
        <div className="header" style={
            {backgroundImage:`url(${background})`}}>
                <Fade top>
        <div className="header_text">
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
        </Fade>
        {first && <div className="contactbtn">
            <AiOutlineMessage style={{
                color:"white",
                fontSize:60,
                position:"fixed",
                bottom:100,
                right:60
            
            }} id="msg"/>
        </div>}
        <Fade bottom>
        <div className="header_bottom">
            <div class="item">
{ second ? <img src={svg}></img> : <h1>{range}</h1>}          
{second ? <h3>Convert Sunlight
into Energy</h3> :  <h3>Range(est.)</h3>}
         </div>
          <br />
          <div class="item">
          <h1>{time}</h1>
          {second ? <h3></h3> : <h3>0-60 mph*</h3>}
         </div>
         <div class="item">
         <h1>{speed}</h1>
          {second ? <h3>Guaranteed
Lowest Price</h3> : <h3>Top Speed†</h3>}
         </div>
         <div class="item" id="horse">
          <h1>{horsepower}</h1>
          {second ? <h3>Energy Monitoring</h3> : <h3>Peak Power</h3>}
         </div>
         <div className="btn">
             <a href="/">Order Now</a>
         </div>
        </div></Fade>   
   </div></div>
     );
}
 
export default HeaderPage;