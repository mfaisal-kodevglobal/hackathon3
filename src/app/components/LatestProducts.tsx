export default function LatestProducts() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              img: "img/products/lp1.png",
              title: "Cantilever Chair",
              colorCode: "Color: Gray",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/products/lp2.png",
              title: "Cantilever Chair",
              colorCode: "Color: Black",
              productCode: "Code: Y523202",
              price: "$26",
              discountPrice: "$36",
            },
            {
              img: "img/products/lp3.png",
              title: "Cantilever Chair",
              colorCode: "Color: Blue",
              productCode: "Code: Y523203",
              price: "$26",
              discountPrice: "$30",
            },
            {
              img: "img/products/lp4.png",
              title: "Cantilever Chair",
              colorCode: "Color: White",
              productCode: "Code: Y523204",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/products/lp5.png",
              title: "Cantilever Chair",
              colorCode: "Color: Red",
              productCode: "Code: Y523205",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/products/lp6.png",
              title: "Cantilever Chair",
              colorCode: "Color: Green",
              productCode: "Code: Y523206",
              price: "$26",
              discountPrice: null,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="w-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col justify-between text-center p-4"
            >
              <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-md">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-base text-[#FB2E86] font-semibold">
                  {product.title}
                </h3>
                <h4 className="text-lg text-[#151875] font-bold">
                  {product.price}
                </h4>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
