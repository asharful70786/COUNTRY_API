import { useEffect, useState } from 'react';
import Countrycard from './countrycard';
import CountryListShimmer from './countrylistShimmer';

function AllCountries({ query }) {
  const [allCountryData, setAllCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setAllCountryData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [query]);

  const filteredCountries = allCountryData.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase()) || country.region.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) {
    return <div>
      <CountryListShimmer />
    </div>;
  }



  return (
    <div className='countries-container'>
      {filteredCountries.map((country) => (
        <Countrycard
          key={country.cca3}
          name={country.name.common}
          flags={country.flags.svg}
          population={country.population.toLocaleString('en-IN')}
          region={country.region}
          capital={country.capital}
          common={country.name.common}
          data={country}
        />
      ))}
    </div>
  );
}

export default AllCountries;