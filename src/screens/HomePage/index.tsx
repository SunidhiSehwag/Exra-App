"use client";
// import CallingApi from "@/components/CallingApi";
import Header from "@/components/Header";
import HomePageBanners from "@/components/HomePageBanners";
import HomePageBigImage from "@/components/HomePageBigImage";
const HomePage = () => {
  return (
    <div>
      <Header />
      <HomePageBanners />
      {/* <CallingApi/> */}
      <HomePageBigImage />
      <HomePageBanners />
    </div>
  );
};
export default HomePage;
