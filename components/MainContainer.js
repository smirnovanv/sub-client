import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <div className="container">
      <Head>
        <meta keywords={keywords}></meta>
        <title>Payment Page</title>
      </Head>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
