import Head from "next/head";

import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
