import { Routes, Route } from "react-router-dom";
/* Components */
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // When changing routes, react-router-dom doesn't automatically scroll back to the top. This custom component wraps the entirely app to bypass this issue
/* Pages */
import { Home, Project, SingleProject, Error } from "./pages";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:projectID" element={<SingleProject />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ScrollToTop>
      <Footer/>
    </>
  );
}

export default App;
