import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import menuimage from '../assets/menu/banner3.jpg'

import UseMenu from '../Hooks/UseMenu';
import MenuCategorey from './MenuCategorey';
import SectionTittle from '../Component/SectionTittle/SectionTittle';
import desertPicture from '../assets/menu/dessert-bg.jpeg';
import saladPicture from '../assets/menu/salad-bg.jpg';
import pizzapicture from '../assets/menu/pizza-bg.jpg';
import sopuPicture from '../assets/menu/soup-bg.jpg';
import drinks from '../assets/menu/banner3.jpg';


const Menu = () => {
    const [menu]=UseMenu();
    const desert=menu.filter(desert=>desert.category==='dessert');
    const salad=menu.filter(desert=>desert.category==='salad');
    const offered=menu.filter(desert=>desert.category==='offered');
    const drinkst=menu.filter(desert=>desert.category==='drinks');
    const pizza=menu.filter(desert=>desert.category==='pizza');
    const soup=menu.filter(desert=>desert.category==='soup');

    return (
        <div>
             <Helmet>
        <title>sixers | our menu</title>
        
      </Helmet>
            <h4> this is our menu </h4>
            <Cover img={menuimage} tittle={"our menu"}></Cover>
            <SectionTittle heading={"Don't miss "} subHeading={"Todays offer"}></SectionTittle>
            <MenuCategorey items={offered}   ></MenuCategorey>
            <MenuCategorey items={desert} img={desertPicture} tittle={"desert"} ></MenuCategorey> 
            <MenuCategorey items={salad} img={desertPicture} tittle={"salad"} ></MenuCategorey> 
            <MenuCategorey items={pizza} img={pizzapicture} tittle={"pizza"} ></MenuCategorey> 
            <MenuCategorey items={drinkst} img={sopuPicture} tittle={"drinks"} ></MenuCategorey> 
            <MenuCategorey items={soup} img={sopuPicture} tittle={"soup"} ></MenuCategorey> 




            
        </div>
    );
};

export default Menu;