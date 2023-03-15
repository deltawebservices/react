<<<<<<< HEAD
import React, { Children, Component } from 'react';
import axios from 'axios';
import Layout from "../../components/Layout";
import Sections from "./Sections/Index";
import Hero from "./Sections/Hero";

import WhyChoose from "./Sections/WhyChoose";
import Industries from "./Sections/Industries";
import Portfolio from "./Sections/Portfolio";
import Clients from "./Sections/Clients";
import Testinomial from "./Sections/Testinomial";
import Blogs from "./Sections/Blogs";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageContent: "",
    };
  }

  componentDidMount() {
    axios.get('https://www.deltawebservices.net/wp-json/wp/v2/pages/23')
      .then(response => {
        this.setState({ pageContent: response.data.acf }
          
          );
          console.log(this.state.pageContent);
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  render() {
    return (
     
      <>
      <Layout>
    
        <Sections>
        <Hero  data={this.state.pageContent}/>
        
        <WhyChoose data={this.state.pageContent}/>
        <Industries/>
        <Portfolio/>
        <Clients/>
        <Testinomial/>
        <Blogs/>
        </Sections>
      </Layout>

    </>
         );
  }
}
export default Home;
=======
import React from "react";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <>
<Layout>
        {/*Start Hero*/}
        {/*Start Hero*/}
        <section className="hero-section hero-digital-agency-1 branding-agency video-bg-">
          <video className="full-video" data-mask={3} src="images/hero/home.mp4" autoPlay muted loop />
          <div className="text-block niwax" data-rellax-speed={-3}>
            <div className="container">
              <div className="row justify-content-center text-left">
                <div className="col-lg-9 v-center">
                  <div className="header-heading">
                    <h1 className="wow fadeInUp text-white" data-wow-delay=".2s">Consultation.<br /> Innovation.<br /> Optimization.</h1>
                    <p className="text-white wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, risus sit amet auctor sodales, justo erat tempor eros.</p>
                    <a href="#" className="btn-main bg-btn3 lnk wow fadeInUp" data-wow-delay=".6s">GET STARTED<i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Hero*/}
        <section className="service-block pad-tb bg-gradient6">
          <div className="container">
            <div className="service-container">
              <div className="row">
                <div className="service-box">
                  <img src="images/process/process-1.jpg" />
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                  </div>
                </div>
                <div className="service-box">
                  <img src="images/process/process-1.jpg" />
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* company awards icons */}
        {/*
    <div class="niwax-company-awards-cover">
      <div class="container">
        <div class="row v-center">
          <div class="companytime col-lg-3">
            <p>20 Yesrs* <span>Industry Experience</span></p>
          </div>
          <div class="companyawards col-lg-9">
            <div class="niwax-logo-awards niwax-logo-slider owl-carousel">
              <div class="industry-workfors">
                <img src="images/icons/house.svg" alt="img"> 
                <h6>Real estate</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/travel-case.svg" alt="img"> 
                <h6>Tour &amp; Travels</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/video-tutorials.svg" alt="img"> 
                <h6>Education</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/taxi.svg" alt="img"> 
                <h6>Transport</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/event.svg" alt="img"> 
                <h6>Event</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/smartphone.svg" alt="img"> 
                <h6>eCommerce</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/joystick.svg" alt="img"> 
                <h6>Game</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/healthcare.svg" alt="img"> 
                <h6>Healthcare</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/money-growth.svg" alt="img"> 
                <h6>Finance</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/baker.svg" alt="img"> 
                <h6>Restaurant</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/mobile-app.svg" alt="img"> 
                <h6>On-Demand</h6>
              </div>
              <div class="industry-workfors">
                <img src="images/icons/groceries.svg" alt="img"> 
                <h6>Grocery</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        {/* company awards icons */}
        <section className="reviews-block pad-tb swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="images/portfolio/tv-application.jpg" className="entity-img" />
              <div className="cbimage-content">
                <h2>
                  Change that's skip more then deep
                </h2>
                <p>
                  How Shiseido is using digital to create new beauty experiences.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="images/portfolio/live-portal.jpg" className="entity-img" />
              <div className="cbimage-content">
                <h2>
                  Change that's skip more then deep
                </h2>
                <p>
                  How Shiseido is using digital to create new beauty experiences.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="images/portfolio/tv-application.jpg" className="entity-img" />
              <div className="cbimage-content">
                <h2>
                  Change that's skip more then deep
                </h2>
                <p>
                  How Shiseido is using digital to create new beauty experiences.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="images/portfolio/live-portal.jpg" className="entity-img" />
              <div className="cbimage-content">
                <h2>
                  Change that's skip more then deep
                </h2>
                <p>
                  How Shiseido is using digital to create new beauty experiences.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="images/portfolio/tv-application.jpg" className="entity-img" />
              <div className="cbimage-content">
                <h2>
                  Change that's skip more then deep
                </h2>
                <p>
                  How Shiseido is using digital to create new beauty experiences.
                </p>
              </div>
            </div>
          </div>
          {/* If we need pagination */}
          {/*  <div class="swiper-pagination"></div>*/}
          {/* If we need navigation buttons */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </section>
        {/*why choose*/}
        <section className="why-choos-lg pad-tb deep-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="common-heading text-l">
                  <span>Why Choose Us</span>
                  <h2 className="mb20">Software Development &amp; Engineering Services</h2>
                  <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <div data-tilt data-tilt-max={5} data-tilt-speed={1000} className="single-image bg-shape-dez wow fadeIn" data-wow-duration="2s"><img src="images/about/about-company.jpg" alt="image" className="img-fluid" /></div>
                  {/*<p class="text-center mt30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>*/}
                </div>
              </div>   
              <div className="col-lg-6">
                <div className="itm-media-object mt40 tilt-3d">
                  <div className="media">
                    <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}><img src="images/icons/computers.svg" alt="icon" className="layer" /></div>
                    <div className="media-body">
                      <h4>Streamlined Project Management</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                    </div>
                  </div>
                  <div className="media mt40">
                    <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}><img src="images/icons/worker.svg" alt="icon" className="layer" /></div>
                    <div className="media-body">
                      <h4>A Dedicated Team of Experts</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                    </div>
                  </div>
                  <div className="media mt40">
                    <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}> <img src="images/icons/deal.svg" alt="icon" className="layer" /></div>
                    <div className="media-body">
                      <h4>Completion of Project in Given Time</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                    </div>
                  </div>
                </div>
                {/*<div class="cta-card mt60 text-center">
                     <h3 class="mb20">Let's Start a  <span class="text-second text-bold">New Project</span> Together</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.</p>
                     <a href="#" class="niwax-btn1 mt30"><span>Request A Quote <i class="fas fa-chevron-right fa-icon"></i></span></a>
                  </div>*/}
              </div>
            </div>
          </div>
        </section>
        {/*End why choose*/}
        <section className="reviews-block pad-tb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="common-heading ptag">
                  <span>Reviews</span>
                  <h2>Industries</h2>
                  <p className="mb30">Check our customers success stories.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt30">
                <div className="reviews-card pr-shadow">            
                  <div className="review-video- mb20">
                    <div className="video-review">
                      <a className="video-link">
                        <img src="images/industry/1.jpg" alt="client" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="-client-details-">
                    <div className="reviewer-text">
                      <h4>Independent Software Vendors</h4>
                    </div>
                    <div>
                      <a href="#" className="rpb-shop-btn">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt30">
                <div className="reviews-card pr-shadow">            
                  <div className="review-video- mb20">
                    <div className="video-review">
                      <a className="video-link">
                        <img src="images/industry/2.jpg" alt="client" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="-client-details-">
                    <div className="reviewer-text">
                      <h4>Media &amp; Entertainment</h4>
                    </div>
                    <div>
                      <a href="#" className="rpb-shop-btn">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt30">
                <div className="reviews-card pr-shadow">            
                  <div className="review-video- mb20">
                    <div className="video-review">
                      <a className="video-link">
                        <img src="images/industry/3.jpg" alt="client" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="-client-details-">
                    <div className="reviewer-text">
                      <h4>Consumer Internet</h4>
                    </div>
                    <div>
                      <a href="#" className="rpb-shop-btn">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt30">
                <div className="reviews-card pr-shadow">            
                  <div className="review-video- mb20">
                    <div className="video-review">
                      <a className="video-link">
                        <img src="images/industry/4.jpg" alt="client" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="-client-details-">
                    <div className="reviewer-text">
                      <h4>E-Commerce</h4>
                    </div>
                    <div>
                      <a href="#" className="rpb-shop-btn">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt30">
                <div className="reviews-card pr-shadow">            
                  <div className="review-video- mb20">
                    <div className="video-review">
                      <a className="video-link">
                        <img src="images/industry/1.jpg" alt="client" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="-client-details-">
                    <div className="reviewer-text">
                      <h4>Healthcare</h4>
                    </div>
                    <div>
                      <a href="#" className="rpb-shop-btn">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt30">
                <div className="reviews-card pr-shadow">            
                  <div className="review-video- mb20">
                    <div className="video-review">
                      <a className="video-link">
                        <img src="images/industry/1.jpg" alt="client" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="-client-details-">
                    <div className="reviewer-text">
                      <h4>Independent Software Vendors</h4>
                    </div>
                    <div>
                      <a href="#" className="rpb-shop-btn">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Start Portfolio*/}
        <section className="portfolio-section pad-tb bg-gradient6">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-lg-8">
                <div className="common-heading">
                  <span>Our Work</span>
                  <h2 className="mb0">Our Latest Creative Work</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-sm-8 mt60 wow fadeInUp" data-wow-delay="0.2s">
                <div className="isotope_item hover-scale">
                  <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
                    <a href="#"><img src="images/portfolio/image-d.jpg" alt="image" className="img-fluid" /> </a>
                  </div>
                  <div className="item-info">
                    <h4><a href="#">Ecommerce Development</a></h4>
                    <p>Web Application</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 mt60 wow fadeInUp" data-wow-delay="0.4s">
                <div className="isotope_item hover-scale">
                  <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
                    <a href="#"><img src="images/portfolio/image-1.jpg" alt="image" className="img-fluid" /> </a>
                  </div>
                  <div className="item-info">
                    <h4><a href="#">Creative App</a></h4>
                    <p>iOs, Android</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 mt60 wow fadeInUp" data-wow-delay="0.6s">
                <div className="isotope_item hover-scale">
                  <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
                    <a href="#"><img src="images/portfolio/image-6.jpg" alt="image" className="img-fluid" /> </a>
                  </div>
                  <div className="item-info">
                    <h4><a href="#">Brochure Design</a></h4>
                    <p>Graphic, Print</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-8 mt60 wow fadeInUp" data-wow-delay="0.8s">
                <div className="isotope_item hover-scale">
                  <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
                    <a href="#"><img src="images/portfolio/image-c.jpg" alt="image" className="img-fluid" /> </a>
                  </div>
                  <div className="item-info">
                    <h4><a href="#">Icon Pack</a></h4>
                    <p>iOs, Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Portfolio*/}
        {/*Start Clients*/}
        <section className="clients-section-app pad-tb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="common-heading text-w">
                  <span className="text-white">Our happy customers</span>
                  <h2 className="mb30">Some of our Clients</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="client-logoset">
                  <ul className="row text-center clearfix apppg">
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay=".2s">
                      <div className="brand-logo hoshd"><img src="images/client/logo1.png" alt="clients" className="img-fluid" /></div>
                      <p>Shutter, USA</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay=".4s">
                      <div className="brand-logo hoshd"><img src="images/client/logo2.png" alt="clients" className="img-fluid" /></div>
                      <p>Hipster, USA</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay=".6s">
                      <div className="brand-logo hoshd"><img src="images/client/logo3.png" alt="clients" className="img-fluid" /></div>
                      <p>Happy, USA</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay=".8s">
                      <div className="brand-logo hoshd"><img src="images/client/logo4.png" alt="clients" className="img-fluid" /></div>
                      <p>Opera Tours, USA</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1s">
                      <div className="brand-logo hoshd"><img src="images/client/logo5.png" alt="clients" className="img-fluid" /></div>
                      <p>Royale Stone, UK</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1.2s">
                      <div className="brand-logo hoshd"><img src="images/client/logo6.png" alt="clients" className="img-fluid" /></div>
                      <p>QTP, Australia</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1.4s">
                      <div className="brand-logo hoshd"><img src="images/client/logo7.png" alt="clients" className="img-fluid" /></div>
                      <p>PAPA, Malaysia</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1.6s">
                      <div className="brand-logo hoshd"><img src="images/client/logo8.png" alt="clients" className="img-fluid" /></div>
                      <p>Coffee, Australia</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1.8s">
                      <div className="brand-logo hoshd"><img src="images/client/logo9.png" alt="clients" className="img-fluid" /></div>
                      <p>Bakery, India</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="2s">
                      <div className="brand-logo hoshd"><img src="images/client/logo10.png" alt="clients" className="img-fluid" /></div>
                      <p>Iconico, India</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="2.2s">
                      <div className="brand-logo hoshd"><img src="images/client/logo11.png" alt="clients" className="img-fluid" /></div>
                      <p>Tom N Jerry, UK</p>
                    </li>
                    <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="2.4s">
                      <div className="brand-logo hoshd"><img src="images/client/logo12.png" alt="clients" className="img-fluid" /></div>
                      <p>Arch, India</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Clients*/}
        {/*Start Testinomial*/}
        <section className="testinomial-section bg-none pad-tb">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-lg-8">
                <div className="common-heading">
                  <span>What our clients say about DWS</span>
                  <h2>Over 1200+ Satisfied Clients and Growing</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="video-testimonials owl-carousel">
                  <div className="video-review" data-tilt data-tilt-max={5} data-tilt-speed={1000}>
                    <a className="video-link" href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0">
                      <img src="images/client/client-pic.jpg" alt="client" className="img-fluid" />
                      <div className="review-vid-details">
                        <div className="-vid-ico"><span className="triangle-play2" /></div>
                        <p>Cina Cleaves</p>
                      </div>
                    </a>
                  </div>
                  <div className="video-review" data-tilt data-tilt-max={5} data-tilt-speed={1000}>
                    <a className="video-link" href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0">
                      <img src="images/client/client-pic-a.jpg" alt="client" className="img-fluid" />
                      <div className="review-vid-details">
                        <div className="-vid-ico"><span className="triangle-play2" /></div>
                        <p>Jokvch Marlin</p>
                      </div>
                    </a>
                  </div>
                  <div className="video-review" data-tilt data-tilt-max={5} data-tilt-speed={1000}>
                    <a className="video-link" href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0">
                      <img src="images/client/client-pic.jpg" alt="client" className="img-fluid" />
                      <div className="review-vid-details">
                        <div className="-vid-ico"><span className="triangle-play2" /></div>
                        <p>Cina Cleaves</p>
                      </div>
                    </a>
                  </div>
                  <div className="video-review" data-tilt data-tilt-max={5} data-tilt-speed={1000}>
                    <a className="video-link" href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0">
                      <img src="images/client/client-pic-a.jpg" alt="client" className="img-fluid" />
                      <div className="review-vid-details">
                        <div className="-vid-ico"><span className="triangle-play2" /></div>
                        <p>Jokvch Marlin</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="owl-carousel testimonial-card-a pl25">
                  <div className="testimonial-card">
                    <div className="t-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="client-thumbs mt30">
                      <div className="media v-center">
                        <div className="user-image bdr-radius"><img src="images/user-thumb/girl.jpg" alt="girl" className="img-fluid" /></div>
                        <div className="media-body user-info v-center">
                          <h5>Mike Smith</h5>
                          <p>Business Owner, <small>Sydney, Australia</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="t-text">
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="client-thumbs mt30">
                      <div className="media v-center">
                        <div className="user-image bdr-radius"><img src="images/user-thumb/girl.jpg" alt="girl" className="img-fluid" /></div>
                        <div className="media-body user-info">
                          <h5>Fred Chener</h5>
                          <p>CEO of Aramxx, <small>Ohio, US State</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="t-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="client-thumbs mt30">
                      <div className="media v-center">
                        <div className="user-image bdr-radius"><img src="images/user-thumb/girl.jpg" alt="girl" className="img-fluid" /></div>
                        <div className="media-body user-info">
                          <h5>Mathilda Burns</h5>
                          <p>Backery Shop, <small>Tronto, Italy</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Testinomial*/}
        {/*Start Blogs*/}
        <section className="blogs-section pb120 pt120 bg-gradient1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="common-heading-2">
                  <span className="text-effect-2">what's going on</span>
                  <h2 className="mb30">Insights</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mt30">
                <div className="single-blog-post- up-hor shdo">
                  <div className="single-blog-img-">
                    <a href="#"><img src="images/blog/blog-1.jpg" alt="girl" className="img-fluid" /></a>
                    <div className="entry-blog-post dg-bg2">
                      <span className="bypost-"><a href="#"><i className="fas fa-tag" /> Nodejs</a></span>
                      <span className="posted-on-">
                        <a href="#"><i className="fas fa-clock" /> Sep 23, 2020</a>
                      </span>
                    </div>
                  </div>
                  <div className="blog-content-tt">
                    <div className="single-blog-info-">
                      <h4><a href="#">Everything You Need To Know About Nodejs!</a></h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="post-social">
                      <div className="ss-inline-share-wrapper ss-hover-animation-fade ss-inline-total-counter-left ss-left-inline-content ss-small-icons ss-with-spacing ss-circle-icons ss-without-labels">
                        <div className="ss-inline-share-content">
                          <div className="ss-social-icons-container">
                            <a href="#">Shares</a>
                            <a href="#" target="blank"><i className="fab fa-facebook" /></a>
                            <a href="#" target="blank"><i className="fab fa-twitter" /></a>
                            <a href="#" target="blank"><i className="fab fa-linkedin" /></a>
                            <a href="#" target="blank"><i className="fas fa-envelope" /></a>
                            <a href="#" target="blank"><i className="fab fa-facebook-messenger" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt30">
                <div className="single-blog-post- up-hor shdo">
                  <div className="single-blog-img-">
                    <a href="#"><img src="images/blog/blog-2.jpg" alt="girl" className="img-fluid" /></a>
                    <div className="entry-blog-post dg-bg2">
                      <span className="bypost-"><a href="#"><i className="fas fa-tag" /> Laravel</a></span>
                      <span className="posted-on-">
                        <a href="#"><i className="fas fa-clock" /> Sep 24, 2020</a>
                      </span>
                    </div>
                  </div>
                  <div className="blog-content-tt">
                    <div className="single-blog-info-">
                      <h4><a href="#">Exploring the Key Features of Laravel 7 Framework</a></h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="post-social">
                      <div className="ss-inline-share-wrapper ss-hover-animation-fade ss-inline-total-counter-left ss-left-inline-content ss-small-icons ss-with-spacing ss-circle-icons ss-without-labels">
                        <div className="ss-inline-share-content">
                          <div className="ss-social-icons-container">
                            <a href="#">Shares</a>
                            <a href="#" target="blank"><i className="fab fa-facebook" /></a>
                            <a href="#" target="blank"><i className="fab fa-twitter" /></a>
                            <a href="#" target="blank"><i className="fab fa-linkedin" /></a>
                            <a href="#" target="blank"><i className="fas fa-envelope" /></a>
                            <a href="#" target="blank"><i className="fab fa-facebook-messenger" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt30">
                <div className="single-blog-post- up-hor shdo">
                  <div className="single-blog-img-">
                    <a href="#"><img src="images/blog/blog-3.jpg" alt="girl" className="img-fluid" /></a>
                    <div className="entry-blog-post dg-bg2">
                      <span className="bypost-"><a href="#"><i className="fas fa-tag" /> Mobile Application</a></span>
                      <span className="posted-on-">
                        <a href="#"><i className="fas fa-clock" /> Sep 25, 2020</a>
                      </span>
                    </div>
                  </div>
                  <div className="blog-content-tt">
                    <div className="single-blog-info-">
                      <h4><a href="#">Best Technology for Mobile Application Development</a></h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="post-social">
                      <div className="ss-inline-share-wrapper ss-hover-animation-fade ss-inline-total-counter-left ss-left-inline-content ss-small-icons ss-with-spacing ss-circle-icons ss-without-labels">
                        <div className="ss-inline-share-content">
                          <div className="ss-social-icons-container">
                            <a href="#">Shares</a>
                            <a href="#" target="blank"><i className="fab fa-facebook" /></a>
                            <a href="#" target="blank"><i className="fab fa-twitter" /></a>
                            <a href="#" target="blank"><i className="fab fa-linkedin" /></a>
                            <a href="#" target="blank"><i className="fas fa-envelope" /></a>
                            <a href="#" target="blank"><i className="fab fa-facebook-messenger" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Blogs*/}
      

        </Layout>
      
    </>
  );
};

export default Home;

>>>>>>> 1c99cf720c7d4258f561e99b47b877e5807a788d
