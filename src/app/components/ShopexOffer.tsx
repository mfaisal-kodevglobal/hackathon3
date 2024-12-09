export default function ShopexOffer() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Shopex Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              img: "img/products/so1.png",
              title: "24/7 Support",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$120",
              discountPrice: null,
            },
            {
              img: "img/products/so2.png",
              title: "24/7 Support",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$960",
              discountPrice: "$1160",
            },
            {
              img: "img/products/so3.png",
              title: "24/7 Support",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$370",
              discountPrice: "$400",
            },
            {
              img: "img/products/so4.png",
              title: "24/7 Support",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$375",
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
                <h3 className="text-base text-[#151875] text-bold-500">{product.title}</h3>
                <p className="text-sm text-[#1A0B5B4D] mt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus eum gravida. 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
