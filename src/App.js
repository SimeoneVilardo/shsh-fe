import React, { useState } from "react";
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      var response = await fetch('/api/eren');
      if (!response.ok) throw new Error('Network response was not OK');
      var result = await response.json();
      alert(result.message);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">

            <form className="login100-form validate-form" onSubmit={handleSubmit}>
              <span className="login100-form-title">
                URL Shortener
              </span>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="url" placeholder="Url" value={url} onChange={e => setUrl(e.target.value)}></input>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-link" aria-hidden="true"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <input className="login100-form-btn" value="Short" type="submit"></input>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
