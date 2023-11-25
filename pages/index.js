import Link from "next/link";
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import CarsPage from "../components/templates/carsPage";
import carsData from "../data/carsData";

function Home() {
  const cars = carsData.slice(0, 3);

  return (
    <div>
      <SearchBar />
      <Categories />
      <Link href="/cars">See All Cars</Link>
      <CarsPage data={cars} />
    </div>
  );
}
export default Home;
