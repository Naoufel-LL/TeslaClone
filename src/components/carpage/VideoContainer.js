import './VideoContainer.css'
import Fade from 'react-reveal/Fade'
const VideoContainer = ({video}) => {
    return ( 
       <div class="video-container">
           <div className="video-side">
           <video src={video} autoPlay muted loop>
           </video>
           </div>
           <div class="text">
               <Fade right>
               <h3>Plaid</h3></Fade>
               <Fade right>
               <h1>Beyond Ludicrous</h1></Fade>
               <Fade right>
               <p>With the longest range and quickest acceleration of any electric vehic
                   le in production, Model S Plaid is the highest performing sedan ever built. Both L
                   ong Range and Plaid powertrains, with updated battery architecture,
                    are capable of back-to-back, consistent 1/4 mile runs
                    .With the longest range and quickest acceleration of any electric vehic
                   le in production, Model S Plaid is the highest performing sedan ever built. Both L
                   ong Range and Plaid powertrains, with updated battery architecture,
                    are capable of back-to-back, consistent 1/4 mile runs</p></Fade>
           </div>
       </div>
     );
}
 
export default VideoContainer;