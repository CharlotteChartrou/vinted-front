import { Link } from "react-router-dom";

const Home = () => {
  const id = 23;
  return (
    <>
      <p>couciu</p>
      <Link to={`/offer/${id}`}>Go to offer</Link>
    </>
  );
};

export default Home;
