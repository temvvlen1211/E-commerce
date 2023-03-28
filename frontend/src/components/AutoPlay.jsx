import React, { useState, useEffect, useRef } from "react";

const AutoplayCarousel = () => {
  const [intervalId, setIntervalId] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const id = setInterval(() => {
      element.id;
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-ride="carousel"
      ref={ref}
    >
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https:/via.placeholder.com/1000x250/img/placeholder"
            alt="Slide 1"
            className="w-100"
          />
          <div className="carousel-caption">
            <h3>Slide 1</h3>
            <p>This is the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="slide2.jpg" alt="Slide 2" />
          <div className="carousel-caption">
            <h3>Slide 2</h3>
            <p>This is the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="slide3.jpg" alt="Slide 3" />
          <div className="carousel-caption">
            <h3>Slide 3</h3>
            <p>This is the third slide.</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default AutoplayCarousel;
