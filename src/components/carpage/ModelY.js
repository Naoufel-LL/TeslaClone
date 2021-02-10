import ContainerPage from './ContainerPage'
import HeaderPage from './HeaderPage'
import modelyback from './teslaimg/AWD_hero@2.jfif'
import pic from './teslaimg/model-3-range-map.png'
import img from './teslaimg/teslab.PNG'
import Teslabuild from './Teslabuild'
import video from './teslaimg/videosafe.mp4'
import VideoContainer from './VideoContainer'
const ModelY = () => {
    return (
        <div>
        <HeaderPage
         title="Model Y"
         background={modelyback}
         description="Speed"
         range="670
         km"
         time="1.99s"
         speed="372
         km/h"
         horsepower="1,320hp"
         first
      />
      <ContainerPage
       pic={pic}
       text="Voyagez plus loin sur u
       ne seule charge que n'importe quel autre véhicule électrique et continuez votre route avec plus de 20 000 Superchargeurs accessibles dans le monde. En combinant une autonomie allant jusqu'à 663 km à la technologie de recharge rapide Tesla, vous passerez moins de temp
       s à recharger et plus de temps sur la route."
      />
      <Teslabuild 
        text="With the most storage space and towing capacity of any electric SUV, and seating for u
        p to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easie
        r loading and a standard trailer hitch lets you bring your gear anywhere you goWith the most storage space and towing capacity of any electric SUV, and seating for u
        p to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easie
        r loading and a standard trailer hitch lets you bring your gear anywhere you go."
        img={img}
      />
      <VideoContainer 
       
        video={video}
     />
      </div>
      );
}
 
export default ModelY;