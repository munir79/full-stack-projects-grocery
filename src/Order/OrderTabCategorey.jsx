import OrderTab from "./OrderTab";


const OrderTabCategorey = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {
                items.map(item=><OrderTab item={item} key={item._id}></OrderTab>)
            }
        </div>
    );
};

export default OrderTabCategorey;