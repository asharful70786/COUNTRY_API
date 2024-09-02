import { useState } from "react";

export default function Header() {
  let [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMOde")));

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <h2>
          <a href="/">
            Where in the world?
          </a>
        </h2>
        <p
          className="theme-change"
          style={{ margin: 0, cursor: 'pointer' }}
          onClick={() => {
            document.body.classList.toggle("dark");
            setIsDark(!isDark);
            localStorage.setItem("isDarkMOde", !isDark)
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "light Mode" : "Dark Mood"}
        </p>
      </div>
    </header>
  );
}