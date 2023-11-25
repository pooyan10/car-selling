import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

function SearchBar() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("please enter minimum and maximum price !");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={handleSearch}>
        search
      </button>
    </div>
  );
}

export default SearchBar;
