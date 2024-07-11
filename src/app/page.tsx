import Hero from "@/components/homePage/Hero";
import StatisticsSection from "@/components/homePage/statisticsSection";
import Blog from "@/components/homePage/Blog";
import Team from "@/components/homePage/Team";
import Enroll from "@/components/homePage/Enroll";
import Sponsors from "@/components/homePage/Sponsors";
import Banner from "@/components/homePage/Banner";
import BlogSection from "@/components/homePage/BlogSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatisticsSection />
      <Blog />
      <Team />
      <Banner />
      <Enroll />
      <Sponsors />
      <BlogSection />
    </div>
  );
}
