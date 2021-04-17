import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "./App.css";

function App() {
  const QUERY_DEFAULT = "reactJs";
  const URI_DEFAULT = `https://hn.algolia.com/api/v1/search?query=`;

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState(QUERY_DEFAULT);
  const [url, setUrl] = useState(`${URI_DEFAULT}${query}`);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);
  console.log(data);
  const handleClickSearch = () => {
    setUrl(`${URI_DEFAULT}${query}`)
  }
  return (
    <div className="App">
      <div className='form-input'>
      <input
        type="text" value={query} onChange={(event) => setQuery(event.target.value)}
      />
      <button className='search' onClick={handleClickSearch}>Search</button>
      </div>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <div className='title'>
            <span>{item.title} </span>
            <a href={item.url}>({item.url})</a>              
            </div>
            <div className='small'>
              <small>{item.points} points </small> |{" "}
              <small>{item.author}</small> |{" "}
              <small>
                <Moment fromNow>{item.created_at}</Moment>
              </small>{" "}
              | <small>{item.num_comments} comments</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
