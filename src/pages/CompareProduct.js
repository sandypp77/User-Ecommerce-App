import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const CompareProduct = () => {
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);

  const updateSize = () => {
    const items = document.querySelectorAll("#compare-product-card");
    if (window.innerWidth < 920 && window.innerWidth >= 400) {
      items.forEach((e) => {
        e.className = "col-6";
      });
    } else if (window.innerWidth < 400) {
      items.forEach((e) => {
        e.className = "col-12";
      });
    } else {
      items.forEach((e) => {
        e.className = "col-3";
      });
    }
  };
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row compare-container">
          <div className="col-3" id="compare-product-card">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image d-flex justify-content-center flex-column">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3" id="compare-product-card">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image d-flex justify-content-center flex-column">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;