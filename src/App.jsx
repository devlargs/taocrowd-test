import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

// ?limit=10&offset=100
const API_URL = "https://api.spacexdata.com/v3/launches";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isEndOfList, setIsEndOfList] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}?limit=10&offset=${page * 10}`);
      const data = await response.json();
      console.log(data);
      setData((prevData) => [...prevData, ...data]);
      setLoading(false);

      if (!data.length) {
        setIsEndOfList(true);
      }
    };

    loadData();
  }, [page]);

  useEffect(() => {
    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (!isEndOfList) {
          setPage((e) => e + 1);
        }
      }
    };
  }, [isEndOfList]);

  return (
    <div className="container">
      <input type="text" placeholder="Search" />

      <section className="articles">
        {data.map((item) => {
          return (
            <Card
              key={item.flight_number}
              details={item.details}
              name={item.mission_name}
              imageSource={item.links.mission_patch}
            />
          );
        })}
      </section>

      {loading && <span className="loader"></span>}
      {isEndOfList && <p className="end-of-list">End of List</p>}
    </div>
  );
}

export default App;
