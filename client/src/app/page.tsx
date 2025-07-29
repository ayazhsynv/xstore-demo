import HomeAbout from "@/components/Home/AboutUs";
import HomeHero from "@/components/Home/Hero";
import HomeTrending from "@/components/Home/Trending";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeTrending />
      <HomeAbout />
    </div>
  );
}
