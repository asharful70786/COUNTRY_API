import "./countrylistshimmer.css"
function CountryListShimmer() {
  return (
    <div className="countries_List_Shimmer">
      {Array.from({ length: 10 }).map((el, i) => (
        <div key={i} className="shimmercard">
          <div className="shimmercard__content">
            <div className="shimmercard__flag" />
            <div className="shimmercard__details">
              <div className="shimmercard__name" />
              <div className="shimmercard__population" />
              <div className="shimmercard__region" />
              <div className="shimmercard__capital" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryListShimmer;