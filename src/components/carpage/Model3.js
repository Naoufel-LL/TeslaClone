import ModelSContainer from './ModelContainer'
import HeaderPage from './HeaderPage';
import NextHeader from './NextHeader'
import Teslabuild from './Teslabuild'
import pic1 from './teslaimg/pic1.jfif'
import pic2 from './teslaimg/pic2.jfif'
import pic3 from './teslaimg/pic3.jfif'
import pic4 from './teslaimg/pic4.jfif'
import VideoContainer from './VideoContainer'
import pic7 from './teslaimg/safety-model-y-hero.png'
import pic6 from './teslaimg/jp-valery-Qm_n6aoYzDs-unsplash.jpg'
import model3back from './teslaimg/model-y_R1@2.jfif'
import video1 from './teslaimg/teslaspeed.mp4'
const Model3 = () => {
    return ( 
        <div>
      <HeaderPage
         title="Model 3"
         background={model3back}
         description="Hyper"
         range="450km"
         time="3.1s"
         speed="250km/h"
         horsepower="1,100hp"
         first
      />
      <NextHeader 
        title="Your Luxury  Car is Here"
        background={pic6}
        white
        />
        <Teslabuild 
          img={pic7}
          text="Safety is the most important part of the overall Model 3 design. The metal structure is a combi
          nation of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an al
          l-glass roof: that's the same weight as two full-grown African elephants"
          />
         <ModelSContainer
        pic1={pic1}
        pic2={pic2}
        pic3={pic3}
        pic4={pic4}
       />
       <VideoContainer 
         video={video1}
       />
      </div> 
    );
}
 
export default Model3;