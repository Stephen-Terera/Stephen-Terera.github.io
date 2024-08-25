import logo from './images/logo.svg';
import './css/App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import PlayerCarousel from './components/carousel.js'
import CarouselWithCharts from "./CarouselWithCharts"
import PieChartComponent from "./components/pieChart.js"

const Dashboard=() => {
  return (
    <div className="App">
      <div class="main"> 
        <Header />
        <PlayerCarousel/>
        <PieChartComponent /> 
      </div> 
      <Footer /> 
    </div>
    
  );
}

export default Dashboard;
