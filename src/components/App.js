import React, {Fragment} from 'react';
// import { Container } from 'semantic-ui-react';
// import { Router } from "@reach/router"
// import MapLayer from "./map/map-layer";
// import Lesson from "./context-lesson/lesson";
// import HocLesson from "./hoc-lesson/hoc-lesson";
// import LoadingHOC from "./hoc-lesson/loading-hoc";
import Header from "./router-lessons/header";
import Footer from "./router-lessons/footer";

function App({children}) {
  return (
    // <MapLayer />
    // <Lesson />
    // <HocLesson />
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default App;