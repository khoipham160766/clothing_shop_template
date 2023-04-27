import React from "react";
import Banner from "../components/Banner";
import WrapperCategories from "../components/WrapperCategories";
import MarqueeWrapper from "../components/MarqueeWrapper";
import FeturedWrapper from "../components/FeturedWrapper";
import SpecialWrapper from "../components/SpecialWrapper";
import PopularWrapper from "../components/PopularWrapper";
import BlogWrapper from "../components/BlogWrapper";
import Container from "../components/Container";
import { services } from "../data";

const Home = () => {
  const config_screen_swiper = {
    0: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    480: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 15,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 15,
    },
    1280: {
        slidesPerView: 6,
        spaceBetween: 15,
    },
}
  return (
    <>
      <Container propsclass='home-wrapper-1 py-3'>
        <div className="row">
          <Banner />
        </div>
      </Container>
      <Container propsclass='home-wrapper-2 py-5 support'>
        <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {         
                  // if service variable exists then run map
                  services?.map((service, index)=> (
                    <div key={index} className="d-flex align-items-center gap-15">
                      <img src={service.image} alt="" className="support-image" />
                      <div>
                        <h6 className="support-title">{service.title}</h6>
                        <p className="mb-0 support-tag">{service.tagline}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
      </Container>
      <Container propsclass='home-wrapper-2 py-2'>
        <div className="row">
          <div className="col-12">
            <WrapperCategories />
          </div>
        </div>
      </Container>
      <Container propsclass='featured-wrapper py-2 home-wrapper-2'>
        <div className="row">
          <FeturedWrapper breakpoints_data={config_screen_swiper}/>
        </div>
      </Container>
      <Container propsclass='special-wrapper py-2 home-wrapper-2'>
        <div className="row">
          <SpecialWrapper />
        </div>
      </Container>
      <Container propsclass='popular-wrapper py-3 home-wrapper-2'>
        <div className="row">
          <PopularWrapper breakpoints_data={config_screen_swiper}/>
        </div>
      </Container>
      <Container propsclass='marque-wrapper home-wrapper-2 py-2'>
        <div className="row">
          <div className="col-12">
            <MarqueeWrapper />
          </div>
        </div>
      </Container>
      <Container propsclass='blog-wrapper py-4 home-wrapper-2'>
        <div className="row">
          <BlogWrapper />
        </div>
      </Container>
    </>
  );
};

export default Home;
