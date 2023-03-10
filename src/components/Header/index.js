import React from "react";



const Header = () => {
  return (
    <>


         {/* top progress bar start*/}
         <div id="progress-bar" />
         {/* top progress bar end */}     
         {/*Start Preloader */}
         <div className="onloadpage loader" id="page_loader">
           <div className="pre-content">
             <div className="logo-pre"><img src="images/logo-gif.gif" alt="Logo" className="img-fluid" /></div>

           </div>
         </div>
        {/* End Preloader */}
         <header className="header-pr nav-bg-b main-header navfix fixed-top menu-white">
           <div className="container-fluid m-pad">
             <div className="menu-header">
               <div className="dsk-logo"><a className="nav-brand" href="index.php">
                   <img src="images/white-logo.png" alt="Logo" className="mega-white-logo" />
                   <img src="images/logo.png" alt="Logo" className="mega-darks-logo" />
                 </a>
               </div>
               <div className="custom-nav" role="navigation">
                 <ul className="nav-list">
                   <li className="sbmenu rpdropdown">
                     <a href="#" className="menu-links">Discover DWS</a>
                     <div className="nx-dropdown menu-dorpdown">
                       <div className="sub-menu-section">
                         <div className="sub-menu-center-block">
                           <div className="sub-menu-column smfull">
                             <ul>
                               <li><a href="about.php">Who We Are?</a> </li>
                               <li><a href="buildingonbelief.php">Building on Belief</a> </li>
                               <li><a href="leadership-diversity.php">Leadership &amp; Diversity</a> </li>
                               <li><a href="dws-way.php">The DWS Way</a> </li>
                               <li><a href="partners.php">Alliances &amp; Partnerships</a> </li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>
                   </li>
                   <li className="sbmenu">
                     <a href="#" className="menu-links">Services </a>
                     <div className="nx-dropdown">
                       <div className="sub-menu-section">
                         <div className="container-fluid">
                           <div className="col-md-12">
                             <div className="tab-17 tabs-layout">
                               <div className="sub-menu-center-block pt40">
                                 <div className="sub-menu-column">
                                   <ul className="nav nav-tabs" id="myTab3" role="tablist">
                                     <li className="nav-item">
                                       <a className="nav-link active" id="tab1a" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Analytics and Engineering</a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab2b" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Enterprise Application</a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab3c" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Cloud Computing</a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab4c" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Digital Commerce</a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab4c" data-bs-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false">Consulting</a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab4c" data-bs-toggle="tab" href="#tab6" role="tab" aria-controls="tab6" aria-selected="false">IT Out Sourcing</a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab4c" data-bs-toggle="tab" href="#tab7" role="tab" aria-controls="tab7" aria-selected="false">Cyber Security </a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab4c" data-bs-toggle="tab" href="#tab8" role="tab" aria-controls="tab8" aria-selected="false">AI and Automation </a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab4c" data-bs-toggle="tab" href="#tab9" role="tab" aria-controls="tab9" aria-selected="false">Quality Engineering</a>
                                     </li>
                                     <li className="nav-item">
                                       <a className="nav-link" id="tab4c" data-bs-toggle="tab" href="#tab10" role="tab" aria-controls="tab10" aria-selected="false">Marketing</a>
                                     </li>
                                   </ul>
                                 </div>
                                 <div className="tab-content mt0" id="myTabContent2">
                                   <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Data Analytics </a></li>                                            
                                           <li><a href="#"><span className="line" />Business Analytics</a></li>
                                           <li><a href="#"><span className="line" />Process Analytics</a></li>
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Data Analytics</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Business Analytics</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab2" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Applications Modernization</a></li>                                            
                                           <li><a href="#"><span className="line" />Enterprise Applications and SaaS</a></li>
                                           <li><a href="#"><span className="line" />Modern Applications Development</a></li>
                                           <li><a href="#"><span className="line" />Managed Applications</a></li>                                             
                                           <li><a href="#"><span className="line" />Testing and Digital Assurance</a></li>                                            
                                           <li><a href="#"><span className="line" />DWS Software</a></li>
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Applications Modernization</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Enterprise Applications and SaaS</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab3" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Hybrid Cloud and Multi-cloud</a></li> 
                                           <li><a href="#"><span className="line" />Public Cloud</a></li>
                                           <li><a href="#"><span className="line" />Cloud Platforms</a></li>
                                           <li><a href="#"><span className="line" />Cloud Advisory and Migration</a></li> 
                                           <li><a href="#"><span className="line" />Managed Services</a></li>
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Hybrid Cloud and Multi-cloud</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Public Cloud</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab4" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Magento</a></li>
                                           <li><a href="#"><span className="line" />Shopify</a></li>
                                           <li><a href="#"><span className="line" />WooCommerce</a></li>
                                           <li><a href="#"><span className="line" />Mobile Applications</a></li>
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Magento</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Shopify</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab5" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Operations Consulting</a></li>
                                           <li><a href="#"><span className="line" />Digital Transformation Consulting</a></li>
                                           <li><a href="#"><span className="line" />Technology Consulting</a></li>
                                           <li><a href="#"><span className="line" />Experience Consulting</a></li>
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Operations Consulting</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Digital Transformation Consulting</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab6" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Compute and Data Center</a></li>                                            
                                           <li><a href="#"><span className="line" />Storage and Backup</a></li>
                                           <li><a href="#"><span className="line" />Network and FMS</a></li>
                                           <li><a href="#"><span className="line" />Business Process Outsourcing</a></li>
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Compute and Data Center</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Storage and Backup</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab7" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Security Risk Management </a></li>                                            
                                           <li><a href="#"><span className="line" />Secured Infrastructure</a></li>
                                           <li><a href="#"><span className="line" />Cyber Defence</a></li>
                                           <li><a href="#"><span className="line" />Digital Identity</a></li> 
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Security Risk Management</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Secured Infrastructure</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab8" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />AI and Automation </a></li>
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>AI and Automation</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>AI and Automation</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab9" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />QA &amp; Testing Service </a></li>                                            
                                           <li><a href="#"><span className="line" />Risk Assessment</a></li>
                                           <li><a href="#"><span className="line" />Implement Agile and DevOps</a></li>
                                           <li><a href="#"><span className="line" />Digital Identity</a></li> 
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>QA &amp; Testing Service</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Risk Assessment</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="tab-pane fade show" id="tab10" role="tabpanel" aria-labelledby="tab1a">
                                     <div className="sub-menu-center-block">
                                       <div className="sub-menu-column">
                                         <ul>
                                           <li><a href="#"><span className="line" />Organic Marketing</a></li>                                            
                                           <li><a href="#"><span className="line" />Digital Advertising</a></li>
                                           <li><a href="#"><span className="line" />Social Media</a></li>
                                           <li><a href="#"><span className="line" />Content marketing</a></li> 
                                           <li><a href="#"><span className="line" />Analytics and Reporting</a></li> 
                                         </ul>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-5.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Organic Marketing</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                       <div className="sub-menu-column">
                                         <div className="video-review mb-3">
                                           <a className="video-link" href="#">
                                             <img src="images/case-study/img-6.jpg" alt="client" className="img-fluid" />
                                             <div className="review-vid-details">
                                               <p>Digital Advertising</p>
                                             </div>
                                           </a>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                                 {/*
                                        <div class="sub-menu-column">
                                           <ul>                                            
 
                                              <li><a href="analytics-and-engineering.php">Analytics and Engineering</a></li>                                             
                                              <li><a href="enterprise_application.php">Enterprise Application</a></li>                                             
                                              <li><a href="cloud-computing.php">Cloud Computing</a></li>                                             
                                              <li><a href="digital-commerce.php">Digital Commerce</a></li>
                                              <li><a href="consulting.php">Consulting </a></li>                             
                                           </ul>
                                        </div>
 */}
                               </div>
                             </div>     
                           </div>
                         </div>
                       </div>
                     </div>
                   </li>
                   <li>
                     <a href="industries.php" className="menu-links">Industries</a> 
                     <div className="nx-dropdown menu-dorpdown">
                       <div className="sub-menu-section">
                         <div className="sub-menu-center-block">
                           <div className="sub-menu-column smfull">
                             <ul>
                               <li><a href="Independent.php">Independent Software Vendors</a> </li>
                               <li><a href="media.php">Media &amp; Entertainment</a> </li>
                               <li><a href="consumer-internet.php">Consumer Internet</a> </li>
                               <li><a href="ecommerce.php">E-Commerce</a> </li>
                               <li><a href="healthcare.php">Healthcare</a> </li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>
                   </li>
                   <li><a href="insights.php" className="menu-links">Insights</a> </li>
                   <li><a href="careers.php" className="menu-links">Careers</a> </li>
                 </ul>
               </div>
               <div className="custom-nav" role="navigation">
                 {/* mobile + desktop - sidebar menu- dark mode witch and button */}
                 <ul className="nav-list right-end-btn">                        
                   <li className="hidemobile"><a data-bs-toggle="offcanvas" href="#offcanvasExample" className="btn-search"><i className="fa fa-search" /></a></li>
                   <li>
                     <img className="mega-white-logo" src="images/logo-iconwhite.png" width={70} />
                     <img className="mega-darks-logo" src="images/logo-icon.png" width={70} />
                   </li>
                   <li className="hidedesktop"><a data-bs-toggle="offcanvas" href="#offcanvasExample" className="btn-round- btn-br bg-btn2"><i className="fas fa-search" /></a></li>            
                   <li className="navm- hidedesktop"> <a className="toggle" href="#"><span /></a></li>
                 </ul>
               </div>
             </div>
             {/*Mobile Menu*/}
             <nav id="main-nav">
               <ul className="first-nav">
                 <li>
                   <a href="index.php">Home</a>
                 </li>
                 <li>
                   <a>Discover DWS</a>
                   <ul>
                     <li><a href="about.php">Who We Are?</a></li>
                     <li><a href="buildingonbelief.php">Building on Belief</a></li>
                     <li><a href="leadership-diversity.php">Leadership &amp; Diversity</a></li>
                     <li><a href="dws-way.php">The DWS Way</a></li>
                     <li><a href="partners.php">Alliances &amp; Partnerships</a> </li>
                   </ul>
                 </li>
                 <li>
                   <a>Services</a>
                   <ul>
                     <li>
                       <a>Analytics and Engineering</a>
                       <ul>
                         <li><a href="analytics-and-engineering.php">Data Analytics </a></li>                                            
                         <li><a href="analytics-and-engineering.php">Business Analytics</a></li>
                         <li><a href="analytics-and-engineering.php">Process Analytics</a></li>
                       </ul>
                     </li>
                     <li>
                       <a>Enterprise Application</a>
                       <ul>
                         <li><a href="enterprise_application.php">Applications Modernization</a></li>
                         <li><a href="enterprise_application.php">Enterprise Applications and SaaS</a></li>
                         <li><a href="enterprise_application.php">Modern Applications Development</a></li>
                         <li><a href="enterprise_application.php">Managed Applications</a></li>   
                         <li><a href="enterprise_application.php">Testing and Digital Assurance</a></li> 
                         <li><a href="enterprise_application.php">DWS Software</a></li>
                       </ul>
                     </li>
                     <li>
                       <a>Cloud Computing</a>
                       <ul>
                         <li><a href="cloud-computing.php">Hybrid Cloud and Multi-cloud</a></li> 
                         <li><a href="cloud-computing.php">Public Cloud</a></li>
                         <li><a href="cloud-computing.php">Cloud Platforms</a></li>
                         <li><a href="cloud-computing.php">Cloud Advisory and Migration</a></li> 
                         <li><a href="cloud-computing.php">Managed Services</a></li>
                       </ul>
                     </li>
                     <li>
                       <a>Digital Commerce</a>
                       <ul>
                         <li><a href="digital-commerce.php">Magento</a></li>
                         <li><a href="digital-commerce.php">Shopify</a></li>
                         <li><a href="digital-commerce.php">WooCommerce</a></li>
                         <li><a href="digital-commerce.php">Mobile Applications</a></li>
                       </ul>
                     </li>
                     <li>
                       <a>Consulting</a>
                       <ul>
                         <li><a href="consulting.php">Operations Consulting</a></li>
                         <li><a href="consulting.php">Digital Transformation Consulting</a></li>
                         <li><a href="consulting.php">Technology Consulting</a></li>
                         <li><a href="consulting.php">Experience Consulting</a></li>
                       </ul>
                     </li>
                     <li>
                       <a>IT Out Sourcing</a>
                       <ul>
                         <li><a href="it-outsourcing.php">Compute and Data Center</a></li>
                         <li><a href="it-outsourcing.php">Storage and Backup</a></li>
                         <li><a href="it-outsourcing.php">Network and FMS</a></li>
                         <li><a href="it-outsourcing.php">Business Process Outsourcing</a></li>
                       </ul>
                     </li>
                     <li>
                       <a>Cyber Security</a>
                       <ul>
                         <li><a href="cyber-security.php">Security Risk Management </a></li>
                         <li><a href="cyber-security.php">Secured Infrastructure</a></li>
                         <li><a href="cyber-security.php">Cyber Defence</a></li>
                         <li><a href="cyber-security.php">Digital Identity</a></li> 
                       </ul>
                     </li>
                     <li><a href="ai-automation.php">AI and Automation</a></li>
                     <li><a>Quality Engineering</a>
                       <ul>
                         <li><a href="quality-engineering.php">QA &amp; Testing Service </a></li>
                         <li><a href="quality-engineering.php">Risk Assessment</a></li>
                         <li><a href="quality-engineering.php">Implement Agile and DevOps</a></li>
                         <li><a href="quality-engineering.php">Digital Identity</a></li> 
                       </ul>
                     </li>
                     <li><a>Marketing</a>
                       <ul>
                         <li><a href="marketing.php">Organic Marketing</a></li>
                         <li><a href="marketing.php">Digital Advertising</a></li>
                         <li><a href="marketing.php">Social Media</a></li>
                         <li><a href="marketing.php">Content marketing</a></li> 
                         <li><a href="marketing.php">Analytics and Reporting</a></li>
                       </ul>
                     </li>
                   </ul>
                 </li>
                 <li>
                   <a href="#">Industries</a>
                   <ul>
                     <li><a href="Independent.php">Independent Software Vendors</a> </li>
                     <li><a href="media.php">Media &amp; Entertainment</a> </li>
                     <li><a href="consumer-internet.php">Consumer Internet</a> </li>
                     <li><a href="ecommerce.php">E-Commerce</a> </li>
                     <li><a href="healthcare.php">Healthcare</a> </li>
                   </ul>
                 </li>
                 <li><a href="insights.php" className="menu-links">Insights</a> </li>
                 <li><a href="careers.php" className="menu-links">Careers</a> </li>
               </ul>
               <ul className="bottom-nav">
                 <li className="prb">
                   <a href="tel:+11111111111">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                       <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                               c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                               c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                               C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z" />
                     </svg>
                   </a>
                 </li>
                 <li className="prb">
                   <a href="https://separateweb.com/cdn-cgi/l/email-protection#493a26242c3e2c2b242c2d2028092e24282025672a2624">
                     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                       <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                       <path d="M0 0h24v24H0z" fill="none" />
                     </svg>
                   </a>
                 </li>
                 <li className="prb">
                   <a href="skype:niwax.company?call">
                     <svg enableBackground="new 0 0 24 24" height={18} viewBox="0 0 24 24" width={18} xmlns="http://www.w3.org/2000/svg">
                       <path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" />
                     </svg>
                   </a>
                 </li>
               </ul>
             </nav>
           </div>
         </header>
         {/*Start sidebar */}    
         <div className="niwaxofcanvas offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample">
           <div className="offcanvas-body">
             <div className="cbtn animation">
               <div className="btnclose"> <button type="button" className="text-reset btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-times" /></button></div>
             </div>
             <div className="form-block">
               <form id="contactForm" data-bs-toggle="validator" className="shake mt20">
                 <div className="search-section">
                   <input type="text" id="name" placeholder="Search" required data-error="Please fill Out" />
                   {/*                  <button type="submit" id="form-submit" class="btn lnk btn-main bg-btn3">Search <span class="circle"></span></button>*/}
                 </div>
                 {/*<div class="row">
               <div class="form-group col-sm-8">
                 <input type="text"  id="name" placeholder="Enter name" required data-error="Please fill Out">
                 <div class="help-block with-errors"></div>
               </div>
               <div class="form-group col-sm-2">
                 <button type="submit" id="form-submit" class="btn lnk btn-main bg-btn3">Submit <span class="circle"></span></button>
               </div>
             </div>*/}
               </form>
             </div>
           </div>
         </div>
         {/*end sidebar */}
   
     
    </>
  );
};

export default Header;