import React, {useState} from 'react'
import MainInfo from "./components/MainInfo"
import ExtraInfo from "./components/ExtraInfo"
import SearchBar from "./components/SearchBar"
require('dotenv').config()

function App() {
    const [info, setInfo] = useState()
    return (
      <div className="app">
      <SearchBar setInfo={setInfo}/>
      <MainInfo data={info}/>
      <ExtraInfo data={info} />
      </div>
  );
}

export default App;
