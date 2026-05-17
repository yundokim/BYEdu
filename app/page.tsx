import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Results } from "@/components/sections/results";
import { Hero } from "@/components/sections/hero";
import { Why } from "@/components/sections/why";
import { Consultants } from "@/components/sections/consultants";
import { Programs } from "@/components/sections/programs";
import { Examples } from "@/components/sections/examples";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      {/* 1) 실제 합격 사례 */}
      <Results />
      {/* 2) 대치 이음 소개 */}
      <Hero />
      {/* 3) 대치 이음 특장점 */}
      <Why />
      {/* 4) 컨설턴트 소개 */}
      <Consultants />
      {/* 5) 프로그램 소개 */}
      <Programs />
      {/* 6) 컨설팅 예시 (Before / After) */}
      <Examples />
      {/* 7) 연락처 */}
      <Cta />
      {/* 8) Q&A */}
      <Faq />
      {/* 9) Footer */}
      <Footer />
    </main>
  );
}
