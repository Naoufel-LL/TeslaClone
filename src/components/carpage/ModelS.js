import pic4 from './teslaimg/david-von-diemar-ZBWn5DvO0hg-unsplash.jpg'
import pic3 from './teslaimg/brecht-denil-H54mZnQua8k-unsplash.jpg'
import pic2 from './teslaimg/bram-van-oost-2NAquPmxld8-unsplash.jpg'
import pic1 from './teslaimg/bram-van-oost-4xM5cytsdMo-unsplash.jpg'
import HeaderPage from "./HeaderPage"
import NextHeader from "./NextHeader"
import ContainerPage from './ContainerPage'
import './ModelS.css'
import ModelSContainer from "./ModelContainer"
import pic5 from './teslaimg/patrik-macik-uwUnukH7a_M-unsplash.jpg'
import modelsback from "./teslaimg/modelS.jfif"
import modelsnext from "./teslaimg/charlie-deets-D1W5QenBzlU-unsplash.jpg"
const ModelS = () => {
    return (
       <div id="models">
      <HeaderPage
         title="Model S"
         background={modelsback}
         description="Plaid"
         range="628
         km"
         time="1.99s"
         speed="322
         km/h"
         horsepower="1,020hp"
         first
      />
      <NextHeader 
       background={modelsnext}
       title="The Futur is Here 🖤"
       black
      />
      <ContainerPage 
       pic={pic5} 
       text="Voyagez plus loin sur u
       ne seule charge que n'importe quel autre véhicule électrique et continuez votre route avec plus de 20 000 Superchargeurs accessibles dans le monde. En combinant une autonomie allant jusqu'à 663 km à la technologie de recharge rapide Tesla, vous passerez moins de temp
       s à recharger et plus de temps sur la route."
       />
       <ModelSContainer
        pic1={pic1}
        pic2={pic2}
        pic3={pic3}
        pic4={pic4}
       />
      </div>

      );
}
 
export default ModelS;