import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Navber from '../../Components/Header/Navber';
import News from '../../Components/News/News';
import Offer from '../../Components/Offer/Offer';
import Riview from '../../Components/Review/Riview';

const Home = () => {
    return (
      <div className="bg-[#010313] scroll-smooth dark:bg-[white]">
        <Navber></Navber>
          <Banner></Banner>
          <Offer></Offer>    
        <Riview></Riview>
        <News></News>
        
        <Footer></Footer>
      </div>
    );
};

export default Home;