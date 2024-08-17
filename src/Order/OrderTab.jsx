

const OrderTab = ({item}) => {
    const {recipe,name,image,price}=item;
    return (
        <div className="card glass w-96">
        <figure>
          <img
            src={image}
            alt="car!" />
            <p className=" text-xl bg-slate-50 font-bold -ms-16"> ${price} </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name} </h2>
          <p>{recipe} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
            
          </div>
        </div>
      </div>
    );
};

export default OrderTab;