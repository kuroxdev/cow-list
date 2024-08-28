import { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import CowsList from "./components/CowsList";
import Addcow from "./components/Addcow";
import LoginPage from "./components/LoginPage";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isauthticated, setIsAutheticated] = useState(false);
  const fetch = () => {
    axios.get("http://127.0.0.1:3000/cows").then((res) => {
      setData(res.data);
    });
  };
  const handleCHangeAuth = () => {
    setIsAutheticated(!isauthticated);
    navigate("/main");
  };
  const handlePost = (input) => {
    axios
      .post("http://127.0.0.1:3000/cows", {
        Name: input.cName,
        Description: input.desc,
      })
      .then(() => {
        fetch();
        console.log("sent successfully");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Routes>
      {!isauthticated && (
        <Route
          path="/"
          element={<LoginPage handleCHangeAuth={handleCHangeAuth} />}
        />
      )}
      {isauthticated && (
        <Route
          path="/main"
          element={
            <div>
              <div className="add-cow-container">
                <Addcow handlePost={handlePost} />
              </div>
              <div className="cows-list-container">
                <CowsList cows={data} fetch={fetch} />
              </div>
            </div>
          }
        />
      )}
    </Routes>
  );
}

export default App;
