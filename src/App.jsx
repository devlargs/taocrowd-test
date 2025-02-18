import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

// ?limit=10&offset=100
const API_URL = "https://api.spacexdata.com/v3/launches";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}?limit=10&offset=${page * 10}`);
      const data = await response.json();
      setData((prevData) => [...prevData, ...data]);
      setLoading(false);
    };

    loadData();
  }, [page]);

  useEffect(() => {
    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((e) => e + 1);
      }
    };
  }, []);

  return (
    <div className="App">
      <input type="text" placeholder="Search" />
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Add page
      </button>
      <section className="articles">
        {data.map((item) => {
          console.log(item.links.mission_patch);
          return (
            <Card
              details={item.details}
              name={item.mission_name}
              imageSource={item.links.mission_patch}
            />
          );
        })}
      </section>

      {loading && <span class="loader"></span>}
    </div>
  );
}

export default App;
