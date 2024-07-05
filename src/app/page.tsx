import Hero from "@/components/homePage/Hero";
import StatisticsSection from "@/components/homePage/statisticsSection";
import Blog from "@/components/homePage/Blog";
import Team from "@/components/homePage/Team";
import Enroll from "@/components/homePage/Enroll";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatisticsSection />
      <Blog />
      <Team />
      <Enroll />
    </div>
  );
}
