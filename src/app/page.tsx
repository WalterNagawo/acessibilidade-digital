import Hero from "@/components/homePage/Hero";
import StatisticsSection from "@/components/homePage/statisticsSection";
import Blog from "@/components/homePage/Blog";
import Team from "@/components/homePage/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatisticsSection />
      <Blog />
      <Team />
    </div>
  );
}
