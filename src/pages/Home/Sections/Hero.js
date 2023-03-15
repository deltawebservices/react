
import React from 'react';
import MediaUrl from "../../../api/MediaUrlApi";

const Hero = (props) => {
    return(


      <>
      {/*Start Hero*/}
            {/*Start Hero*/}
            <section className="hero-section hero-digital-agency-1 branding-agency video-bg-">
              <video className="full-video" data-mask={3} src={MediaUrl(props.data.hero_video)} autoPlay muted loop />
              <div className="text-block niwax" data-rellax-speed={-3}>
                <div className="container">
                  <div className="row justify-content-center text-left">
                    <div className="col-lg-9 v-center">
                      <div className="header-heading">
                        <h1 className="wow fadeInUp text-white" data-wow-delay=".2s">  
                        
                       
                         <div dangerouslySetInnerHTML={{ __html: props.data.hero_heading }} />


    </h1>
                        <p className="text-white wow fadeInUp" data-wow-delay=".4s"> {props.data.hero_description}</p>
                        <a href="#" className="btn-main bg-btn3 lnk wow fadeInUp" data-wow-delay=".6s">GET STARTED<i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End Hero*/}
         
          
        </>   
    );
}
  
export default Hero;

