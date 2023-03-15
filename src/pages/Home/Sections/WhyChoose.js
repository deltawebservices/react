import React from "react";
import MediaUrl from "../../../api/MediaUrlApi";

const WhyChoose = (props) => {
  return (
    <>

        {/*whychoose*/}
        <section className="why-choos-lg pad-tb deep-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="common-heading text-l">
                  <span>Why Choose Us</span>
                  <h2 className="mb20">{props.data.choose_heading}</h2>
                  <p className="mb-5">{props.data.choose_content}</p>
                  <div data-tilt data-tilt-max={5} data-tilt-speed={1000} className="single-image bg-shape-dez wow fadeIn" data-wow-duration="2s"><img src={MediaUrl(props.data.choose_img)} alt="image" className="img-fluid" /></div>
                  {/*<p class="text-center mt30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>*/}
                </div>
              </div>   
              <div className="col-lg-6">
                <div className="itm-media-object mt40 tilt-3d">
                  <div className="media">
                    <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}><img src={MediaUrl(props.data.choose_box_img_1)} alt="icon" className="layer" /></div>
                    <div className="media-body">
                      <h4>{props.data.choose_box_heading_1}</h4>
                      <p>L{props.data.choose_box_content_1}</p>
                    </div>
                  </div>
                  <div className="media mt40">
                    <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}><img src={MediaUrl(props.data.choose_box_img_2)} alt="icon" className="layer" /></div>
                    <div className="media-body">
                      <h4>{props.data.choose_box_heading_2}</h4>
                      <p>{props.data.choose_box_content_2}</p>
                    </div>
                  </div>
                  <div className="media mt40">
                    <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}> <img src={MediaUrl(props.data.choose_box_img_3)} alt="icon" className="layer" /></div>
                    <div className="media-body">
                      <h4>{props.data.choose_box_heading_3}</h4>
                      <p>{props.data.choose_box_content_3}</p>
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
      
    </>
  );
};

export default WhyChoose;