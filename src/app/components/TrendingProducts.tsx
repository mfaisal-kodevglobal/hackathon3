export default function TrendingProducts() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              img: "img/products/tp1.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/products/tp2.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: "$26",
            },
            {
              img: "img/products/tp3.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: "$26",
            },
            {
              img: "img/products/tp4.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: null,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="w-[270px] h-[361px] bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col justify-center items-center text-center p-4"
            >
              <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-md">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base text-[#FB2E86]">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {product.colorCode}
                </p>
                <p className="text-sm text-[#151875]">{product.productCode}</p>
                <h4 className="text-xl text-[#151875] font-bold mt-2">
                  {product.price}
                  {product.discountPrice && (
                    <span className="text-sm text-gray-500 ml-2">
                      <del>{product.discountPrice}</del>
                    </span>
                  )}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
