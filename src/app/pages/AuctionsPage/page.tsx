// app/auctions/page.tsx
import AuctionHeaderWithSort from "@/app/component/AuctionHeaderWithSort";
import FilterSidebar from "@/app/component/FilterSidebar";
import AuctionList from "@/app/component/AuctionList";

const AuctionsPage = () => {
  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar */}
      <div className="w-full max-w-md mt-12">
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <AuctionHeaderWithSort />

        {/* You can add your auction grid or list here */}
        <div className="mt-6 ">
          {/* Example content */}
          <AuctionList />
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;
