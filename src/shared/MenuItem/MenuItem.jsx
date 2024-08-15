

const MenuItem = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div className="flex gap-4">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="text-xl uppercase">{name}-------------------- </h3>
                <p className="w-[443px]">{recipe}</p>
            </div>
            <p>${price} </p>
        </div>
    );
};

export default MenuItem;