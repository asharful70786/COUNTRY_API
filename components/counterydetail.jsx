import React, { useEffect, useState } from 'react';
import './CountryDetail.css';
import Loading from './loading';
import { Link, useLocation, useParams } from 'react-router-dom';
import NotFoundError from './NotFounderror';

export default function CountryDetail() {
  const param = useParams();
  const { state } = useLocation()


  let countryName = param.country;

  const [countryData, setCountryData] = useState(null);
  const [Country_Found, setNotFound] = useState(false);



  function Update_Country_Data(data) {
    if (!data || !data.name || !data.name.common) {
      console.error('Invalid country data:', data);
      return;
    }

    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages).join(', '),
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(', '),
      borders: [],
    });
  }
  useEffect(() => {
    if (state && state.name && state.name.common) {
      Update_Country_Data(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then(([data]) => {
        Update_Country_Data(data);

        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common);
        })).then((borderCountries) => {
          setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders: borderCountries })));
        });
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (Country_Found === true) {
    return <div><NotFoundError /></div>;
  }

  return countryData === null ? (
    <Loading />
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
              {
                countryData.borders.length != 0 && <b>Border Countries:  {
                  countryData.borders.map((borderCountry) => (
                    <Link key={borderCountry} to={`/${borderCountry}`}>
                      <p style={{ border: "0.5px solid black", margin: "3px", display: "flex" }}>{borderCountry}</p>
                    </Link>
                  ))
                }</b>

              }
              &nbsp;

            </div>

          </div>
        </div>

      </div>

    </main>
  );
}