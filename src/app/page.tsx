import AboutMe from "@/components/home/AboutMe";
import HeroSection from "@/components/home/HeroSection";
import MySkills from "@/components/home/MySkills";
import RecentProjects from "@/components/home/RecentProjects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <RecentProjects />
    </>
  );
}
