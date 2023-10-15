import { Link, useLocation } from "react-router-dom";
import "./FinishPage.css";
import { Button } from "react-bootstrap";

function FinishPage() {
  let { state } = useLocation();
  console.log(state);

  const background = {
    backgroundImage: 'url("/assets/images/cool-background.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="v-h-center h-100 p-3" style={background}>
      <div className="w-75 w-md-50 h-50 p-2 bg-light d-flex flex-column justify-content-around  rounded text-center">
        <h1>
          <span
            className="d-inline-block align-middle"
            style={{ lineHeight: "normal" }}
          >
            Your Score: {state.score}/10
          </span>
        </h1>
        <div className="d-flex justify-content-around ">
          <Link to={"/prepare"}>
            <Button size="lg">Try Again</Button>
          </Link>
          <Link to={"/"}>
            <Button size="lg">Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FinishPage;
