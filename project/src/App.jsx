import Header from "./common/header/header.jsx";
import Footer from "./common/footer/footer.jsx";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
