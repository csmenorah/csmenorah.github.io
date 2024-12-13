import Footer7 from "@/components/footers/PagesFooter";
import Header8 from "@/components/headers/PagesHeader";
import Hero from "@/components/homes/home-8/Hero";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 8 || Brown Commerce",
  description: "Brown Commerce",
};
export default function HomePage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header8 />
        <main style={{ padding: 0 }}>
          <Hero />
        </main>
        <Footer7 />
      </div>
    </>
  );
}
