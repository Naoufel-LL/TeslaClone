import Item from './Item'
import Model3img from './assets/Desktop-Model3.jpeg'
import ModelSimg from './assets/Desktop-ModelS.jpeg'
import ModelXimg from './assets/Desktop-ModelX.jpeg'
import ModelYimg from './assets/Desktop-ModelY.jpeg'
import SolarPanelsimg from './assets/Desktop-SolarPanels.jpeg'
import Accessoriesimg from './assets/Desktop-Accessories.jpg'
import SecondItem from './Seconditem'
const MainPage = () => {
    return ( 
        <div>
        <Item 
          title="Model 3"
          backgroundimg={Model3img}
          text="Réservez un essai sans contract"
          textbottom="A reçu la note maximale de 5 étoiles par Euro NCAP"
          first
          />
          <Item 
          title="Model S"
          backgroundimg={ModelSimg}
          text="Réservez un essai sans contract"
          textbottom=""
          
          />
          <Item 
          title="Model X"
          backgroundimg={ModelXimg}
          text="Réservez un essai sans contract"
          textbottom=""
          />  
          <SecondItem 
          title="Model Y"
          backgroundimg={ModelYimg}
          text=""
          textbottom=""
          />
          <SecondItem 
          title="Systèmes d'énergie solaire et Powerwalls"
          backgroundimg={SolarPanelsimg}
          text="De l’énergie pour tous vos besoins"
          textbottom=""
          />
          <SecondItem 
          title="Accessoires"
          backgroundimg={Accessoriesimg}
          text=""
          textbottom="Tesla © 2021
          Mentions légales
          Contact
          Carrières
          Newsletter
          Actualités
          Localisations"
          />
         </div>
     );
}
 
export default MainPage;