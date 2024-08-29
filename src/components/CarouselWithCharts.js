import PieChartComponent from "./pieChart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";

const data1 = [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 300 },
    { name: 'D', value: 200 },
  ];
  
  const data2 = [
    { name: 'E', value: 500 },
    { name: 'F', value: 200 },
    { name: 'G', value: 100 },
    { name: 'H', value: 150 },
  ];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const CarouselWithCharts = () => (
    <div class="charts">
      <Slider {...settings}>
        <div>
          <h3>Chart 1</h3>
          <PieChartComponent data={data1} />
        </div>
        <div>
          <h3>Chart 2</h3>
          <PieChartComponent data={data2} />
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
  
export default CarouselWithCharts;


