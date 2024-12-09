export default function LatestBlog() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[ 
            {
              img: "img/lb1.png",
              title: "Cantilever Chair",
              colorCode: "Color: Gray",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/lb2.png",
              title: "Cantilever Chair",
              colorCode: "Color: Black",
              productCode: "Code: Y523202",
              price: "$26",
              discountPrice: "$36",
            },
            {
              img: "img/lb3.png",
              title: "Cantilever Chair",
              colorCode: "Color: Blue",
              productCode: "Code: Y523203",
              price: "$26",
              discountPrice: "$30",
            }
          ].map((product, index) => (
            <div
              key={index}
              className="w-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col justify-between text-center p-4"
            >
              <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-md">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-md" // Ensure the image fills the container and is responsive
                />
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-base text-[#151875] font-bold">{product.title}</h3>
                <p className="text-sm text-[#1A0B5B4D] mt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus eum gravida.
                </p>
                <p className="text-sm text-[#1A0B5B4D] mt-1">
                  Read More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
