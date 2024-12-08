
import Categories from "./components/Categories";
import CompanyLogo from "./components/companyLogo";
import FeaturedProduct from "./components/FeatureProduct";

import Hero from "./components/Hero";
import HotCategories from "./components/HotCategories";
//import HotCategories from "./components/HotCategories";
import HotProduct from "./components/HotCategories";
import OurProduct from "./components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
			
      <CompanyLogo />
			<FeaturedProduct />
      <Categories />
      <HotCategories />
      <OurProduct />
    </>
  );
}
