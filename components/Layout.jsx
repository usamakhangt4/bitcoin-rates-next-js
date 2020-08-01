import Head from 'next/head';
import Navbar from './Navbar';
const Layout = props => {
  return (
    <React.Fragment>
      <Head>
        <title>Bitcoins</title>
      </Head>
      <div className="bg-purple-600 h-screen font-Arvo">
        <Navbar />
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
