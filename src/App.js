
import "./App.css";
import TopSellers from "./Components/Home/TopSellers/TopSellers";
import Footer from "./Components/Share/Footer/Footer";

import Header from "./Components/Share/Header/Header";

import MyRoutes from "./MyRoutes";
import "./Styles/Style.css";
function App() {
  return (
    <>
      <Header />
      <MyRoutes />
      <TopSellers />
      <Footer />
    </>
  );
}

export default App;
