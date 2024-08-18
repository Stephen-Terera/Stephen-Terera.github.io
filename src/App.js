import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer.js";
import PlayerCarousel from './carousel.js'
import CarouselWithCharts from "./CarouselWithCharts"
import PieChartComponent from "./pieChart.js"

function App() {
  return (
    <div className="App">
      <Header />
      <PlayerCarousel/>
      <PieChartComponent /> 
      <Footer/>
    </div>
  );
}

export default App;
