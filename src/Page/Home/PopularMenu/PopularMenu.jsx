
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {
  const [menu]=UseMenu();
  const popular=menu.filter(item=>item.category==='popular');
    return (
    <section>
        <SectionTittle heading={"popular Menu"}
        subHeading={"From Our Menu"}></SectionTittle>

        <div className="grid md:grid-cols-2 gap-5">
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </section>
    );
};

export default PopularMenu;