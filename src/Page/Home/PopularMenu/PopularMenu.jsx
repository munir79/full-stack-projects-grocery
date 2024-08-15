import { useEffect, useState } from "react";
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import MenuItem from "../../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect( ()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularMenu=data.filter(item=>item.category==='popular' );
            setMenu(popularMenu);

        })
    },[])
    return (
    <section>
        <SectionTittle heading={"popular Menu"}
        subHeading={"From Our Menu"}></SectionTittle>

        <div className="grid md:grid-cols-2 gap-5">
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </section>
    );
};

export default PopularMenu;