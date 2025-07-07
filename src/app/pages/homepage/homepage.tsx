import Homefilter from "../../component/Homefilter";
import CarBidCard from "../../component/CarBidCard";
import BrandPartners from "../../component/Brands";
import ViewallButton from "@/app/component/viewallButton";

import AuctionList from "@/app/component/AuctionList";
import WhyUsSection from "@/app/component/WhyUsSection";
import PaymentOptionsPanel from "@/app/component/PaymentOptionsPanel";
import Navbar from "@/app/component/navbar";
// import FilterSidebar from "@/app/component/FilterSidebar";
export default function HomePage() {
  return (
    <>
      <div className="w-[1440px] mx-auto">
        <Navbar />
        <Homefilter />

        <CarBidCard />
        <BrandPartners />
        <ViewallButton title="Recently Added Auctions" />

        <AuctionList limit={3} />
        <ViewallButton title="Upcoming Auction" />
        <AuctionList limit={3} />
        <WhyUsSection />

        <PaymentOptionsPanel />
      </div>
      {/* <FilterSidebar /> */}
    </>
  );
}
