import './ContainerPage.css'
import Zoom from 'react-reveal/Zoom'
const ContainerPage = ({pic,text,second}) => {
    return (  
        <div className="gaz-container">
        <div className="box">
           <div className="imgbox">
               <img src={pic} />
           </div></div>
           <div class="text-right">
              <Zoom delay={400}>
           <h3>Autonomie</h3></Zoom>
           <Zoom>
           {second ? <h1>Electricity For Less
</h1> : <h1>Voyager sans limite</h1>}</Zoom>
           <Zoom>
               <p>
                  {text}
                   </p></Zoom>
             <Zoom>
                   <div className="btnbtn">
              <a href="#">Order Now</a>
           </div></Zoom>
           </div>
     </div>
    );
}
 
export default ContainerPage;