import logo from './images/logo.svg';
import './css/App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import PieChartComponent from "./components/pieChart.js"
import WelcomeComponent from "./components/WelcomeComponent.js"
import ProgressComponent from './components/ProgressComponent.js';

const Dashboard=() => {
  return (
    <div className="App">
      <div class="main"> 
        <Header />
        <WelcomeComponent/>
        <ProgressComponent /> 
      </div> 
      <Footer /> 
    </div>
    
  );
}

export default Dashboard;
