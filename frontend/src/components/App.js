import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import './App.css';
import Nav from './Nav';

function App() {
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [placeholder, setPlaceholder] = useState("Loading")

  useEffect(() => {
    fetch('api/lead').then(res => {
      if (res.status > 400) {
        setPlaceholder("Something went wrong!")
      }
      return res.json()
    }).then(json => {
      setData(json)
      setLoaded(true)
    })
  }, [])

  return (
    <>
    <div className="container">
      <h1>Leads</h1>
      <div className="lead-list">
        {data.map(contact => {
          let name = contact.name;
          let index = name.indexOf(' ');
          let fname = name.substr(0, index).toLowerCase();
          return (
            <div className="lead" key={contact.id}>
              <h2>{contact.name}</h2>
              <p><small>{contact.email}</small></p>
              <p>{contact.message}</p>
            </div>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default App;

const container = document.getElementById("app");
render(<App />, container);