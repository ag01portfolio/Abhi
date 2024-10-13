import  styles from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar" ;

function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <section style={{ backgroundColor: "red", height: 600 }} id="m1 ">
        m1sdfsd
        sdfsd
      </section>
      <section style={{ backgroundColor: "blue", height: 600 }} >
      <div id="m2 ">
        <h1>m2</h1>
        </div>
      </section>
      <section style={{ backgroundColor: "red" , height: 600}} id="m3 ">
        m3
      </section>
      <section style={{ backgroundColor: "gold" , height: 600}} id="m4 ">
        m4
      </section>
    </div>
  );
}

export default App
