import './ModelX.css'
import modelxback from './teslaimg/Desktop-ModelX.jpeg'
import HeaderPage from "./HeaderPage"
import Teslabuild from './Teslabuild'
import VideoContainer from "./VideoContainer"
import  ContainerPage from './ContainerPage'
import pic1 from './teslaimg/jorgen-hendriksen-Sp2kTxW-t5I-unsplash.jpg'
import pic from './teslaimg/safety-model-y-hero.png'
import video from './teslaimg/video2.mp4'
const ModelX = () => {
    return ( 
        <div>
          <HeaderPage
         title="Model X"
         background={modelxback}
         description="Plaid"
         range="640
         km"
         time="3.99s"
         speed="352
         km/h"
         horsepower="1,120hp"
         first
      />
       <ContainerPage 
       pic={pic1} 
       text="Voyagez plus loin sur u
       ne seule charge que n'importe quel autre véhicule électrique et continuez votre route avec plus de 20 000 Superchargeurs accessibles dans le monde. En combinant une autonomie allant jusqu'à 663 km à la technologie de recharge rapide Tesla, vous passerez moins de temp
       s à recharger et plus de temps sur la route."
       />
      <Teslabuild 
          img={pic}
          text="Safety is the most important part of the overall Model 3 design. The metal structure is a combi
          nation of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an al
          l-glass roof: that's the same weight as two full-grown African elephants"
          />
          <VideoContainer 
         video={video}
       />
       </div>
     );
}
 
export default ModelX;