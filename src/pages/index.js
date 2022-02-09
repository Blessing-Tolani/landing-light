import Head from "next/head";
import Header from "../components/Header";
import Payment from "../components/payment/Payment";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Landing Light</title>
      </Head>
      <div>
        <Header />
        <Payment />
      </div>
    </div>
  );
};

export default Home;
