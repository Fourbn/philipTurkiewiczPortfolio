import React from "react";
import Normalize from "../styles/Normalize";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Normalize />
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
		</>
	);
};

export default Layout;
