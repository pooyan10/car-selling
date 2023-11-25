import styles from "./Categories.module.css";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";
import carsData from "../../data/carsData";

const carCat = ["sport", "suv", "sedan", "hatchback"];

const Categories = () => {
  return (
    <div className={styles.container}>
      {carCat.map((category) => (
        <Link href={`/categories/${category}`}>
          <div>
            <p>{category}</p>
          </div>
        </Link>
      ))}
    </div>

    // <div className={styles.container}>
    //   <Link href={`/categories/${category === "sedan"}`}>
    //     <div>
    //       <p>Sedan</p>
    //       <Sedan />
    //     </div>
    //   </Link>
    //   <Link href={`/categories/${category === "suv"}`}>
    //     <div>
    //       <p>Suv</p>
    //       <Suv />
    //     </div>
    //   </Link>
    //   <Link href={`/categories/${category === "hatchback"}`}>
    //     <div>
    //       <p>Hatchback</p>
    //       <Hatchback />
    //     </div>
    //   </Link>
    //   <Link href={`/categories/${category === "sport"}`}>
    //     <div>
    //       <p>Sport</p>
    //       <Sport />
    //     </div>
    //   </Link>
    // </div>
  );
};

export default Categories;
