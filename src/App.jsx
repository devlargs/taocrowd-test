import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { API_URL } from "./constants/apiUrl";
import uniqBy from "./utils/uniqBy";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}?limit=10&offset=${page * 10}`);
      const data = await response.json();
      setData((prevData) => uniqBy([...prevData, ...data], "flight_number"));
      setLoading(false);

      if (!data.length) {
        setIsEndOfList(true);
      }
    };

    if (!searchText) {
      loadData();
    }
  }, [page, searchText]);

  useEffect(() => {
    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (!isEndOfList) {
          setPage((e) => e + 1);
        }
      }
    };
  }, [isEndOfList]);

  const filteredData = useMemo(() => {
    if (!searchText) {
      return data;
    }

    return data.filter((item) => {
      return item.mission_name.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [searchText, data]);

  return (
    <div>
      <div className="search-container">
        <p>SpaceX Launches</p>

        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <section className="articles">
        {filteredData.length ? (
          filteredData.map((item) => (
            <Card
              key={item.flight_number}
              details={item.details}
              name={item.mission_name}
              imageSource={item.links.mission_patch}
            />
          ))
        ) : (
          <p>{!loading && "No Data Found"}</p>
        )}
      </section>

      {loading && (
        <div style={{ marginBottom: "100px" }}>
          <span className="loader"></span>
        </div>
      )}
      {isEndOfList && <p className="end-of-list">End of List</p>}
    </div>
  );
}

export default App;
