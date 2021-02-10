import HeaderPage from "./HeaderPage";
import NextHeader from "./NextHeader";
import pic2 from './teslaimg/solar-roof_design_D.jpg'
import ContainerPage from "./ContainerPage";
import pic1 from './teslaimg/Inverter_V8_D.jpg'
import pic from './teslaimg/D_PW_Hero_2880x1800.jpg'
import back from './teslaimg/solar-roof_value_D.jpg'
import Container2 from "./Container2";
const Powerwall = () => {
    return ( 
        <div>
<HeaderPage
         title="Solar for Existing Roofs "
         background={back}
         description="Plaid"
         range="120min"
         time=""
         speed="$"
         horsepower="24/7"
         first
         second
      />
      <NextHeader
       background={pic}
       title="Electricity For Less ⚡ "
      />
      <ContainerPage 
       pic={pic1} 
       text="Use solar energy to power your home and reduce your dependen
       ce on the grid. Purchase solar at the lowest price of any national provider with Tesla'
       s price match guarantee and take control of your monthly electricity bill. Lea
       rn more about your potential savings in our Design Studio."
       second
       />
       <Container2
        background={pic2}
        text="Replace your current roof with Sol
        ar Roof and power your home with a fully integrated solar system. With a seamless design, each tile looks great up-close or from the street, complementin
        g your home’s architecture.Replace your current roof with Sol
        ar Roof and power your home with a fully integrated solar system. With a seamless design, each tile looks great up-close or from the street, complementin
        g your home’s architecture."
        title="Trusted Expertise
        "
       />
      </div>
     )
 
    ;
}
 
export default Powerwall;
  <HeaderPage />
