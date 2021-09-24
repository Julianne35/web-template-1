import Navigation from "../components/ui/Nav";
import Header from "../components/ui/Header";
import Footer from "../components/Footer";
import PartThree from "../components/PartThree";
import style from "./MainStyles.module.css";

const Main = () => {
  return (
    <>
      <section>
        <div className={style["nav-bar-top"]}></div>
        <Navigation />
      </section>
      <Header />
      <div className={style["bodyHeight"]}>
        
        <PartThree />
      </div>
      <Footer />
    </>
  );
};
export default Main;
