import Banner from "../Banner/Banner";
import Catagorey from "./Catagorey/Catagorey";
import Feature from "./Feature/Feature";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <Catagorey></Catagorey>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;