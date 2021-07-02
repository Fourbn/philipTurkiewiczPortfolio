import React from "react";
import Normalize from "../styles/Normalize";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Normalize />
			<GlobalStyles />
      {children}
      <Footer />
		</>
	);
};

export default Layout;
