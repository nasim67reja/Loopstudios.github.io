import { Fragment } from "react";
import Header from "./components/Header/Header";
import SectionAI from "./components/Body/SectionAI";
import SectionGl from "./components/Body/SectionGl";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Fragment>
      <Header />
      <SectionAI />
      <SectionGl />
      <Footer />
    </Fragment>
  );
}
