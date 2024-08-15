import Banner from "../Banner/Banner";
import Catagorey from "./Catagorey/Catagorey";
import Feature from "./Feature/Feature";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
        <Helmet>
        <title>sixers | home</title>
        
      </Helmet>
            <Banner></Banner>
            <Catagorey></Catagorey>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;