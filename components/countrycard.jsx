import { Link } from "react-router-dom";
import "../App.css";


export default function Countrycard({ name, flags, population, capital, region, common, data }) {
  return (
    <div>

      <Link className='country-card' to={`/${common}`} state={{ data }} >


        <img src={flags} alt={`name` + `Flag`} className='flag-image' />
        <div className='card-text'>
          <h3 className='card-title'>{name}</h3>
          <p><b>population : </b>{population}</p>
          <p><b>Region : </b> {region}</p>
          <p><b>Capital: </b>{capital}</p>
        </div>
      </Link>
    </div>
  );
}