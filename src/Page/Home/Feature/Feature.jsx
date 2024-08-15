import SectionTittle from "../../../Component/SectionTittle/SectionTittle";

import feature from '../../../assets/home/featured.jpg'
import '../../../Style/Style.css'
const Feature = () => {
    return (
        <div className="feature bg-fixed text-white pt-8 my-20 ">
            <section>
              <SectionTittle heading={"Cheek it Out"}
              subHeading={"from Our menu"}></SectionTittle>

              <div className=" md:flex justify-center bg-slate-400 bg-opacity-35 text-white py-8 px-16 items-center space-x-5 ">
                <div><img className="" src={feature} alt="" /></div>
                <div className="md:ml-10">
                    <p> 11 November 2029 </p>
                    <h2> Where Can I Get Some?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>

                </div>
              </div>
            </section>
        </div>
    );
};

export default Feature;