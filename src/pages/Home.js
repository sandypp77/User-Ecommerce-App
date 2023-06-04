import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import {
  BsTruck,
  BsBox,
  BsHeadphones,
  BsDatabaseFillLock,
} from "react-icons/bs";

const Home = () => {
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);

  const updateSize = () => {
    const famousProduct = document.querySelectorAll("#famous-product");
    const blogContainer = document.querySelectorAll("#blog-container");
    if (window.innerWidth < 768) {
      famousProduct.forEach((e) => {
        e.className = "col-6";
      });
      blogContainer.forEach((e) => {
        e.className = "col-6";
      });
    } else {
      famousProduct.forEach((e) => {
        e.className = "col-3";
      });
      blogContainer.forEach((e) => {
        e.className = "col-3";
      });
    }
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="d-flex gap-2 container">
          <div className="container-main">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-10 justify-content-center align-items-center container-small">
            <div className="small-banner position-relative">
              <div className="banner-inner">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner-content position-absolute">
                <h4>Best Sake</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <div className="banner-inner">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative ">
              <div className="banner-inner">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative ">
              <div className="banner-inner">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="feature d-flex justify-content-center gap-10 flex-wrap align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <BsTruck className="feature-icons"></BsTruck>
                <h5 className="m-0">Free Delivery</h5>
              </div>
              |
              <div className="d-flex gap-2 align-items-center">
                <BsBox className="feature-icons"></BsBox>
                <h5 className="m-0">Satisfied or Refunded</h5>
              </div>
              |
              <div className="d-flex gap-2 align-items-center">
                <BsHeadphones className="feature-icons"></BsHeadphones>
                <h5 className="m-0">Top-notch Support</h5>
              </div>
              |
              <div className="d-flex gap-2 align-items-center">
                <BsDatabaseFillLock className="feature-icons"></BsDatabaseFillLock>
                <h5 className="m-0">Secure Payments</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Computers & Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/Computers Laptop.avif" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Smart Television</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/Watch.avif" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/VIdeo games.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Mobiles & Tablets</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/handphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center item">
                <div>
                  <h6>Portable Speaker</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker portable.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3" id="famous-product">
            <div className="famous-card position-relative">
              <div className="banner-inner">
                <img
                  src="images/famous-1.webp"
                  className="img-fluid"
                  alt="famous"
                />
              </div>
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3" id="famous-product">
            <div className="famous-card position-relative">
              <div className="banner-inner">
                <img
                  src="images/famous-2.webp"
                  className="img-fluid"
                  alt="famous"
                />
              </div>
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3" id="famous-product">
            <div className="famous-card position-relative">
              <div className="banner-inner">
                <img
                  src="images/famous-3.webp"
                  className="img-fluid"
                  alt="famous"
                />
              </div>
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3" id="famous-product">
            <div className="famous-card position-relative">
              <div className="banner-inner">
                <img
                  src="images/famous-3.webp"
                  className="img-fluid"
                  alt="famous"
                />
              </div>
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3" id="blog-container">
            <BlogCard />
          </div>
          <div className="col-3" id="blog-container">
            <BlogCard />
          </div>
          <div className="col-3" id="blog-container">
            <BlogCard />
          </div>
          <div className="col-3" id="blog-container">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
