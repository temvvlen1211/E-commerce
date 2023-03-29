// home page iin canon camera heseg
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CameraSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container my-5  ">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* map ashiglanaa martvaa */}
        <Carousel.Item style={{ height: "350px" }}>
          <div className="d-flex justify-content-evenly ">
            <div className=" d-flex align-items-center">
              <div>
                <div>
                  <h1 className="w-50 my-4    "> Canon Camera</h1>
                </div>
                <div className="d-flex gap-3">
                  <button className="btn btn-warning text-white">
                    Shop now
                  </button>
                  <button className="btn btn-outline-primary">View more</button>
                </div>
              </div>
            </div>
            <img src={"svg/camera.svg"} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
