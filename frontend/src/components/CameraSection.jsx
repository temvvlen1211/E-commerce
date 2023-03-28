export default function CameraSection() {
  return (
    <>
      <div className="carousel slide " dataRide="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img
              src="https:/via.placeholder.com/1000x250/img/placeholder"
              className="d-block  w-100   "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https:/via.placeholder.com/1000x250/img/placeholder"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https:/via.placeholder.com/1000x250/img/placeholder"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
