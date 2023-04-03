import CameraSection from "../components/CameraSection";
import Navbar from "../components/Navbar";
import PopularProducts from "../components/PopularProducts";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <CameraSection />
      <ProductSection />
      <PopularProducts />
    </>
  );
}
