export default function NotebookSection() {
  return (
    <div className="container my-5">
      <div className="position-relative">
        <img
          src="svg/notebook.svg"
          alt="notebook"
          className="position-absolute"
        />

        <div className="position-absolute   top-0 start-50  bottom-50   end-0             text-white text-center">
          <button className="btn btn-warning text-white     ">
            New laptop
          </button>
          <h2 className=" text-primary  ">Sale up to 50% off</h2>
          <p>12 inch hd display</p>
          <button className="btn btn-warning   text-white          ">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
