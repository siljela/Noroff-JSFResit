import "./sass/style.scss";
import Layout from "./layout/Layout";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import ToMain from "./components/ToMain";

function App() {
  return (
    <>
      <ToMain />
      <Logo />
      <Layout id="#main"/>
      <Footer />
    </>
  );
}

export default App;
