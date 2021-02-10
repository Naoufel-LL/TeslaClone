import BackVideo from "./BackVideo"
import pic1 from './teslaimg/solar1.jpg'
import pic2 from './teslaimg/solar2.jpg'
import pic3 from './teslaimg/solar3.jpg'
import pic4 from './teslaimg/solar4.jpg'
import ModelSContainer from './ModelContainer'
import phone from './teslaimg/phone.jpg'
import Container2 from "./Container2"
const Recharge = () => {
    return ( 
        <div>
            <BackVideo />
            <ModelSContainer
        pic1={pic1}
        pic2={pic2}
        pic3={pic3}
        pic4={pic4}
       />
       <Container2
       background={phone}
       title='Control With Your Phone'
       text="With the Tesla app, you can monitor your energy production in real time. Control
        your system from anywhere with instant alerts and remote access.
        Powerwall is a compact home battery that stores the energy you 
        produce with Solar Roof, making it available anytime—at night or during an outage."
       />
        </div>
     );
}
 
export default Recharge;