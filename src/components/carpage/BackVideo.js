import './BackVideo.css'
import HeaderPage from './HeaderPage'
const BackVideo = () => {
    return (
        <div className="videobackground">
           <HeaderPage
         title="Solar Roof         "
         description="⚡⚡⚡"
         range="60min 🕒"
         time=""
         speed="$"
         horsepower="x3"
         first
         second
      />
            <video
             autoPlay muted loop>
                 <source src="https://www.tesla.com/sites/default/files/solarroof/v3/hero/DesignHero_desktop.mp4" type="video/mp4" />

             </video>
        </div>
      );
}
 
export default BackVideo;