import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import product1 from "../style/images/body_care/product1.webp";
import product2 from "../style/images/body_care/product2.webp";
import product3 from "../style/images/body_care/product3.webp";
import product4 from "../style/images/body_care/product4.webp";
import product5 from "../style/images/body_care/product5.webp";
import product6 from "../style/images/body_care/product6.webp";
import product7 from "../style/images/body_care/product7.webp";
import product8 from "../style/images/body_care/product8.webp";
import product9 from "../style/images/body_care/product9.webp";

function Hands() {
  return (
    <div className="slide-container">
      <h2 className="slide-header">Exceptional formulations for Hands</h2>
      <Splide
        renderControls={() => (
          <div className="splide__arrows">
            <button class="splide__arrow splide__arrow--prev"></button>
            <button class="splide__arrow splide__arrow--next"></button>
          </div>
        )}
        options={{
          perPage: 3,
          perMove: 1,
          gap: "2rem",
          breakpoints: {
            640: {
              gap: ".7rem",
            },
            480: {
              gap: ".7rem",
            },
          },
        }}
      >
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product1}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>

            <div className="product-info">
              <p className="product-title">Geranium Leaf Body Cleanser 500mL</p>
              <p className="price">Dhs. 165.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product2}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">Geranium Leaf Body Balm 500mL</p>
              <p className="price">Dhs. 335.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product3}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">
                Geranium Leaf Hydrating Body Treatment 100mL
              </p>
              <p className="price">Dhs. 120.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product4}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">Geranium Leaf Body Scrub 180mL</p>
              <p className="price">Dhs. 125.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product5}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">Geranium Leaf Duet</p>
              <p className="price">Dhs. 440.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product6}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">Geranium Leaf Body Cleanser 100mL</p>
              <p className="price">Dhs. 65.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product7}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">
                Geranium Leaf Rinse-Free Hand Wash 500mL
              </p>
              <p className="price">Dhs. 165.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product8}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">
                Geranium Leaf Rinse-Free Hand Wash 50mL
              </p>
              <p className="price">Dhs. 40.00</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="product-container">
            <div className="img-container">
              <img
                src={product9}
                alt="Aesop Body Geranium Leaf Body Balm 500mL"
              />
            </div>
            <div className="product-info">
              <p className="product-title">Geranium Leaf Body Balm 100mL</p>
              <p className="price">Dhs. 115.00</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
export default Hands;
