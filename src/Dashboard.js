import logo from './images/logo.svg';
import './css/App.css';
import Header from "./Header";
import Footer from "./Footer.js";
import PlayerCarousel from './carousel.js'
import CarouselWithCharts from "./CarouselWithCharts"
import PieChartComponent from "./pieChart.js"

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
