import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Navber from '../../Components/Header/Navber';
import Riview from '../../Components/Review/Riview';

const Home = () => {
    return (
      <div className="bg-[#010313] dark:bg-[white]">
        <Navber></Navber>
        <Banner></Banner>
        <Riview></Riview>
        <Footer></Footer>
      </div>
    );
};

export default Home;