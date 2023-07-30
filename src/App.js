import React,{Fragment} from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import NextPage from "./Pages/NextPage"


function App() {
  return (
    <Fragment>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/next" element={<NextPage/>}/>
          </Routes>
     
      
     </div>

    </Fragment>

  
  );
}

export default App;
