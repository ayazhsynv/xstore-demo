import AboutHero from "@/components/About/Hero";
import AboutInspiration from "@/components/About/Inspiration";
import AboutMeet from "@/components/About/MeetUs";
import AboutReach from "@/components/About/Reach";
import AboutSupport from "@/components/About/Support";
import AboutTutorials from "@/components/About/Tutorials";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutInspiration />
      <AboutTutorials />
      <AboutReach />
      <AboutSupport />
      <AboutMeet />
    </div>
  );
};

export default AboutUsPage;
