import './ModelS.css'
import Fade from 'react-reveal/Fade';
const ModelContainer= ({pic1,pic2,pic3,pic4}) => {
    return ( 
        <div className="models_grid">
       <div className="models_row">
          <div className="models_box">
             <div className="models_imgbox">
             <img src={pic1}></img>
             </div>
              </div>
            
             <div class="models_textright">
                <Fade bottom>
                <h3>Title1</h3>
                <p>Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. </p></Fade>
             </div>
       </div>
       <div className="models_row_reverse">  
          <div className="models_box">
             <div className="models_imgbox">
             <img src={pic2}></img>
             </div>
              </div>
             <div class="models_textright">
                 <Fade bottom>
                <h3>Title1</h3>
                <p>Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. </p></Fade>
             </div>
                </div>
       <div className="models_row">
          <div className="models_box">
             <div className="models_imgbox">
             <img src={pic3}></img>
             </div>
              </div>
             <div class="models_textright">
              <Fade bottom>
                <h3>Title1</h3>
                <p>Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. </p></Fade>
             </div>
         
       </div>
       <div className="models_row_reverse">
          <div className="models_box">
             <div className="models_imgbox">
             <img src={pic4}></img>
             </div>
              </div>
             <div class="models_textright">
                 <Fade bottom>
                <h3>Title1</h3>             
                <p>Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, conse
                   ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. </p></Fade>
             </div>
         
       </div>
      </div>
     );
}
 
export default ModelContainer