import React from "react";
<<<<<<< HEAD
import Footer from '../Footer';
=======
import Footer from '../Footer'
>>>>>>> 1c99cf720c7d4258f561e99b47b877e5807a788d
import Header from  "../Header";
const Layout = ({children}) => {
 return (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
 )
}
export default Layout;