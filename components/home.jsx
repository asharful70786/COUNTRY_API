import { useState } from "react";
import "../App.css"
import Searchbar from "./scarchbar";
import SelectMenu from "./selectMenu";
import AllCountries from "./countriesList";





function Home() {
  let [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">

        <Searchbar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>

      <AllCountries query={query} />
    </main>
  )
}

export default Home