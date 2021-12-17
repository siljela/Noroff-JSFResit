import "./sass/style.scss";
import Layout from "./layout/Layout";
import Footer from "./layout/Footer";
import Logo from "./components/Logo";
import ToMain from "./components/ToMain";

function App() {
  return (
    <>
      <ToMain />
      <Logo />
      <Layout />
      <Footer />
    </>
  );
}

export default App;
