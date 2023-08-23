import { Link } from "react-router-dom";

import background from "../img/background-img.jpeg";
/* const express = require("express");
const cors = require("cors"); */

/* const app = express();
app.use(cors()); */

const Home = () => {
  const id = 23;
  return (
    <>
      <div className="container">
        <div className="bloc-home">
          <span>Prêts à faire du tri dans vos placards</span>{" "}
          <button>Commencer à vendre</button>
        </div>{" "}
      </div>
      <div className="img-home">
        <img src={background} alt="background" />
      </div>
      <div className="container">
        <Link to={`/offer/${id}`}>Go to offer</Link>
      </div>
    </>
  );
};

export default Home;
