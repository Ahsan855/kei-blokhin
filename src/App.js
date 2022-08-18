import "./App.css";
import TopSellers from "./Components/Home/TopSellers/TopSellers";
import Footer from "./Components/Share/Footer/Footer";
import MyRoutes from "./MyRoutes";
function App() {
  return (
    <>
      <MyRoutes />
      <TopSellers />
      <Footer />
    </>
  );
}

export default App;
