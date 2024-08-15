

const SectionTittle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 md:h-[140px] mx-auto text-center">
            <p className=" text-[#D99904] text-xl uppercase"> ---{heading}--- </p>
            <h3 className="p-4 mt-4 text-[#151515] text-4xl uppercase border-y-4">{subHeading} </h3>
        </div>
    );
};

export default SectionTittle;