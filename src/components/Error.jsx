import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h3>
        You have not provided your ddetails. Kindly head back to the{" "}
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
};

export default Error;
