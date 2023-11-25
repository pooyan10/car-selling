import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";
import { useRouter } from "next/router";

function carCategory() {
  const router = useRouter();
  const { carCategory } = router.query;
  const carSelected = carsData.filter((car) => car.category === carCategory);
  console.log(carSelected);
  return (
    <div>
      <CarsList data={carSelected} />
    </div>
  );
}

export default carCategory;
