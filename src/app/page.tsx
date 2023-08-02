import AboutMe from "./(index)/components/AboutMe";
import HeroSection from "./(index)/components/HeroSection";
import MySkills from "./(index)/components/MySkills";
import RecentProjects from "./(index)/components/RecentProjects";
import ContactMe from "./(index)/components/ContactMe";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <RecentProjects />
      <ContactMe />
    </>
  );
}
