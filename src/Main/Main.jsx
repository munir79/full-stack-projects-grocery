import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../shared/Footer";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;