import React from 'react'

export default function Searchbar({ setQuery }) {
  return (
    <main>
      <div className="search-filter-container">
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass" />
          <input onChange={(e) => setQuery(e.target.value.toLowerCase())}
            type="text" placeholder="Search for a country..." />

        </div>

      </div>
      <div className="countries-container" />
    </main>
  )
}
