import Navigation from "../components/ui/Nav";
import Header from "../components/ui/Header";
import style from "./MainStyles.module.css";

const Main = () => {
  return (
    <>
      <section>
        <div className={style["nav-bar-top"]}></div>
        <Navigation />
      </section>
      <Header />
      <div className={style["bodyHeight"]} />
    </>
  );
};
export default Main;
