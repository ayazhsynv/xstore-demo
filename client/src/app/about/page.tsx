import AboutInspiration from "@/components/About/Inspiration";
import AboutMeet from "@/components/About/MeetUs";
import AboutReach from "@/components/About/Reach";
import AboutSupport from "@/components/About/Support";
import AboutTutorials from "@/components/About/Tutorials";
import PageHeading from "@/components/Common/PageHeading";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <PageHeading
        title="About Us"
        description="Discover the story behind our brand, our mission, and the values that drive us. Learn about our journey, the inspiration behind our products, and how we strive to make a positive impact in the world."
      />
      <AboutInspiration />
      <AboutTutorials />
      <AboutReach />
      <AboutSupport />
      <AboutMeet />
    </div>
  );
};

export default AboutUsPage;
