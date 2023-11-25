import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  console.log(min, max);

  const filteredData = carsData.filter(
    (car) => car.price > min && car.price < max
  );

  if (!filteredData.length) return <h3>Not Found</h3>;

  return (
    <div>
      <CarsList data={filteredData} />
    </div>
  );
}

export default FilteredCars;
