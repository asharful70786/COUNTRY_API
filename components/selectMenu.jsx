import React from 'react';

function SelectMenu({ setQuery }) {
  return (
    <section className="filter-by-region" onClick={(eve) => setQuery(eve.target.value)}>
      <select>
        <option value="" hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
}

export default SelectMenu;
