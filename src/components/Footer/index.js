import React from "react";


const Footer = () => {
  return (
    <>
        <footer className="footerdez dark-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12 col-sm-12">
              <div className="row fttlnks">
                <div className="col-lg-3 col-sm-6">
                  <div className="footerdez-a">
                    <img src="images/white-logo.png" />
                    <p className="mt10">SCO - 38, 2nd Floor, Old Judicial Complex, Civil Lines, Gurugram</p>
                    <div className="contactinfo mt20">
                      <a href="mailto:info@deltait.co.in">info@deltait.co.in <span>→</span></a>
                      <a href="tel:+91123456790">(91) 882 619 6688 <span>→</span></a>                     
                    </div>
                    <div className="ff-social-icons mt20">
                      <a href="#" target="blank"><i className="fab fa-facebook" /></a>
                      <a href="#" target="blank"><i className="fab fa-twitter" /></a>
                      <a href="#" target="blank"><i className="fab fa-linkedin" /></a>
                      <a href="#" target="blank"><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5>Industries</h5>
                  <ul className="footer-address-list link-hover">
                    <li><a href="#">Banking &amp; Financial Services</a></li>
                    <li><a href="#">Capital Markets</a></li>
                    <li><a href="#">Consumer Goods &amp; Distribution</a></li>
                    <li><a href="#">Communications, Media &amp; Technology</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Energy, Resources &amp; Utilities</a></li>
                    <li><a href="#">HiTech</a></li>
                    <li><a href="#">Insurance</a></li>
                    <li><a href="#">Life Sciences &amp; Healthcare</a></li>
                    <li><a href="#">Manufacturing</a></li>
                    <li><a href="#">Public Services</a></li>
                    <li><a href="#">Travel, Transportation &amp; Hospitality</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5>SERVICES</h5>
                  <ul className="footer-address-list link-hover">
                    <li><a href="#">Analytics and Insights</a></li>
                    <li><a href="#">Automation &amp; AI</a></li>
                    <li><a href="#">Blockchain</a></li>
                    <li><a href="#">Cognitive Business Operations</a></li>
                    <li><a href="#">Consulting</a></li>
                    <li><a href="#">Cyber Security</a></li>
                    <li><a href="#">Enterprise Applications</a></li>
                    <li><a href="#">IOT &amp; Digital Engineering</a></li>
                    <li><a href="#">Quality Engineering</a></li>
                    <li><a href="#">DWS Interactive</a></li>
                    <li><a href="#">Sustainability Services</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5>Discover DWS</h5>
                  <ul className="footer-address-list link-hover">
                    <li><a href="#">Building on Belief</a></li>
                    <li><a href="#">Alliances &amp; Partnerships</a></li>
                    <li><a href="#">Corporate Sustainability</a></li>
                    <li><a href="#">Corporate Social Responsibility</a></li>
                    <li><a href="#">Leadership &amp; Diversity</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">DWS Research</a></li>
                    <li><a href="#">Sports Sponsorships</a></li>
                    <li><a href="#">The DWS Way</a></li>
                    <li><a href="#">Corporate DWS</a></li>
                  </ul>
                </div>
                {/*<div class="col-lg-3 col-sm-6">
                       <h5>Connect with DWS</h5>
                       <ul class="footer-address-list link-hover">
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Careers</a></li>
                          <li><a href="#">Cookie Policy</a></li>
                          <li><a href="#">Security Policy</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Disclaimer</a></li>
                          <li><a href="#">Terms & Conditions</a></li>
                          <li><a href="#">Contact Us</a></li>
                       </ul>
                    </div>*/}
              </div>
              <div className="row fttlnks flexend btm-footer align-items-center">
                <div className="col-lg-3">
                  <div className="footer-copyrights-">
                    <p>Copyright © 2022 Delta Web Services.</p>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="disclaimer">
                    <p><strong>Disclaimer</strong> This Website and the information, tools and material contained in it (this “Site”) are not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or which would subject DWS Private Limited or its affiliates to any registration or licensing requirement within such jurisdiction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
      
    </>
  );
};

export default Footer;

