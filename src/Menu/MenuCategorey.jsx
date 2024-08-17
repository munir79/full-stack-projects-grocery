import MenuItem from "../shared/MenuItem/MenuItem";
import Cover from "./Cover/Cover";


const MenuCategorey = ({items,img,tittle}) => {
    return (
       <div className="mt-10 ">
           {img &&   <Cover img={img} tittle={tittle} ></Cover>}
         <div className="grid md:grid-cols-2 gap-5 mt-10">
       
        {
            items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
        }
    </div>
       </div>
    );
};

export default MenuCategorey;