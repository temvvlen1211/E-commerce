import { StarRating } from "./ratingStar";

export default function PopularProducts() {
  const product = [
    {
      image: "https://via.placeholder.com/300x300",
      name: "Camera",
      price: 1234,
    },
    {
      image: "https://via.placeholder.com/300x300",
      name: "Imac",
      price: 1234,
    },
    {
      image: "https://via.placeholder.com/300x300",
      name: "iphone",
      price: 1234,
    },
    {
      image: "https://via.placeholder.com/300x300",
      name: "laptop",
      price: "1234$",
    },
    {
      image: "https://via.placeholder.com/300x300",
      name: "Camera",
      price: 1234,
    },
    {
      image: "https://via.placeholder.com/300x300",
      name: "Imac",
      price: 1234,
    },
    {
      image: "https://via.placeholder.com/300x300",
      name: "iphone",
      price: 1234,
    },
    {
      image: "https://via.placeholder.com/300x300",
      name: "laptop",
      price: "1234$",
    },
  ];

  return (
    <>
      <div class="container my-3  ">
        <div className="d-flex justify-content-between my-5">
          <div>
            <h2>Popular Products</h2>
          </div>
          <div className="d-flex gap-2 ">
            <button className="btn btn-outline-primary ">Camera</button>
            <button className="btn btn-outline-primary">Camera</button>
            <button className="btn btn-outline-primary">Camera</button>
            <button className="btn btn-outline-primary">Camera</button>
          </div>
        </div>
        <div class="row">
          <div class="d-flex justify-content-between flex-wrap gap-3   ">
            {product.map((product) => {
              return (
                <div class="card ">
                  <img
                    class="card-img-to "
                    src={product.image}
                    alt="Product 1"
                  />
                  <div class="card-body">
                    <h3 class="card-title">{product.name}</h3>
                    <p class="card-text">{product.price}</p>

                    <StarRating />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
