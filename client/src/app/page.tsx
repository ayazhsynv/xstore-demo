import HomeAbout from "@/components/Home/AboutUs";
import HomeAward from "@/components/Home/Award";
import HomeBlog from "@/components/Home/Blog";
import HomeFeatured from "@/components/Home/Featured";
import HomeHero from "@/components/Home/Hero";
import HomeTrending from "@/components/Home/Trending";
import HomeUpcoming from "@/components/Home/Upcoming";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeTrending />
      <HomeAbout />
      <HomeFeatured />
      <HomeUpcoming />
      <HomeAward />
      <HomeBlog />
    </div>
  );
}
