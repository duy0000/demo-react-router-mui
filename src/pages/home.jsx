import Button from "@mui/material/Button";
import Header from "./header";

function Home() {
  return (
    <>
      <Header />
      <Button variant="contained">
        <a href="Landingpage">Landingpage</a>
      </Button>
      <Button variant="contained">
        <a href="Login">Login</a>
      </Button>
      <Button variant="contained">
        <a href="Connect">Connect</a>
      </Button>
      <Button variant="contained">
        <a href="Logout">Logout</a>
      </Button>
    </>
  );
}

export default Home;
