import Blog3 from "@/components/blogs/Blog3";

import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Blog 3 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function BlogPage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <Blog3 />
        </main>
        <div className="mb-5 pb-xl-5"></div>
        <Footer1 />
      </div>
    </>
  );
}
