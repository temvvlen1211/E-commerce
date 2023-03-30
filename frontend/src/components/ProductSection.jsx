// home page iin canon camera heseg
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ProductSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container    ">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="d-flex justify-content-around  ">
            <div className="border border-dark rounded  d-flex p-2 ">
              <div>
                <img
                  src={"svg/speaker.svg"}
                  className="rounded"
                  alt="speaker"
                />
              </div>

              <div className="mt-3 me-4">
                <h3>Speaker</h3>
                <p>(6 items)</p>
              </div>
            </div>
            <div className="border border-dark rounded  d-flex p-2 ">
              <div>
                <img
                  src={"svg/speaker.svg"}
                  className="rounded"
                  alt="speaker"
                />
              </div>

              <div className="mt-3 me-4">
                <h3>Speaker</h3>
                <p>(6 items)</p>
              </div>
            </div>
            <div className="border border-dark rounded  d-flex p-2 ">
              <div>
                <img
                  src={"svg/speaker.svg"}
                  className="rounded"
                  alt="speaker"
                />
              </div>

              <div className="mt-3 me-4">
                <h3>Speaker</h3>
                <p>(6 items)</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around  ">
            <div className="border border-dark rounded  d-flex p-2 ">
              <div>
                <img
                  src={"svg/speaker.svg"}
                  className="rounded"
                  alt="speaker"
                />
              </div>

              <div className="mt-3 me-4">
                <h3>Speaker</h3>
                <p>(6 items)</p>
              </div>
            </div>
            <div className="border border-dark rounded  d-flex p-2 ">
              <div>
                <img
                  src={"svg/speaker.svg"}
                  className="rounded"
                  alt="speaker"
                />
              </div>

              <div className="mt-3 me-4">
                <h3>Speaker</h3>
                <p>(6 items)</p>
              </div>
            </div>
            <div className="border border-dark rounded  d-flex p-2 ">
              <div>
                <img
                  src={"svg/speaker.svg"}
                  className="rounded"
                  alt="speaker"
                />
              </div>

              <div className="mt-3 me-4">
                <h3>Speaker</h3>
                <p>(6 items)</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
