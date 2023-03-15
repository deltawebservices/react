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
