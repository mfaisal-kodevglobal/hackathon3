import FeaturedProducts from "./components/FeaturedProducts";
import TrendingProducts from "./components/TrendingProducts";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/ShopexOffer";
import OffProducts from "./components/OffProducts";
import LatestBlog from "./components/LatestBlog";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Hero Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Banner */}
          <div
            className="flex-grow bg-gray-100 p-4 rounded-md shadow-sm"
            style={{
              minHeight: "550px", // Ensure the image container has a minimum height
              backgroundImage: "url('/img/promotional.png')",
              backgroundSize: "cover",
              backgroundPosition: "top center", // Ensure the image aligns to the top center
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Flash Sales Section */}
        <div className="mt-8">
          <FeaturedProducts />
        </div>

        {/* Best Selling Section */}
        <div className="mt-8">
          <LatestProducts />
        </div>

        {/* Shopex Offer! Section */}
        <div className="mt-8">
          <ShopexOffer />
        </div>

{/* Promotional Banner 1 */}
<div className="bg-[#F1F0FF] py-8">
  <div className="container mx-auto px-4 flex justify-center">
    <div
      className="w-1/2 rounded-md overflow-hidden shadow-sm"
      style={{
        minHeight: "370px", // Ensure the image container has a minimum height
        backgroundImage: "url('/img/promotional1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </div>
</div>




        {/* TrendingProducts */}
        <div className="mt-3">
          <TrendingProducts />
        </div>

        {/* New Arrival Section */}
        <div className="">
         <OffProducts />
        </div>

        {/* discountitem */}
        <div className="font-[sans-serif] p-4 mx-auto ">
         
  <div className=" mx-auto  flex justify-center">
  <h3>Discount Items</h3><br/><br/>
    <div
      className="w-1/2 rounded-md overflow-hidden shadow-sm"
      style={{
        minHeight: "370px", // Ensure the image container has a minimum height
        backgroundImage: "url('/img/discountitem.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </div>
</div>



{/* latestupdates */}
<div className="bg-[#F1F0FF] py-8">
  <div className="container mx-auto px-4 flex justify-center">
    <div
      className="w-full rounded-md overflow-hidden shadow-sm"
      style={{
        minHeight: "370px", // Ensure the image container has a minimum height
        backgroundImage: "url('/img/latestupdates.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </div>
</div>

        {/* Information Icons Section */}
        <div className="mt-3">
          <LatestBlog />
        </div>



      </div>
    </>
  );
}
