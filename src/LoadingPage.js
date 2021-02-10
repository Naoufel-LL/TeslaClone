import './App.css'
import Countup from 'react-countup'
import img from './components/carpage/teslaimg/pngegg.png'
const LoadingPage = () => {
    return (  
        <div class="loadinglogo">
        <img src={img} />
        <h1>Loading The site 🖤 in 🚀 <Countup start={5} end={0} duration={15}></Countup>  </h1>
        <br />
        <h3>© 2020 Copyright:  Naoufel Bahassoune 👨‍💻</h3>
        </div>
    );
}
 
export default LoadingPage;