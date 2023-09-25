import HomePage from "./Pages/HomePage";
import SearchResults from "./Pages/SearchResults";
import ResultProduct from "./Pages/ResultProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import styles from "./index.scss";
import { SubHeaderProvider } from "./Components/Layout/SubHeader/SubHeaderContext";
import { MediaProvider } from "./Components/Context/MediaContext";
import { AltTextProvider } from "./Components/Context/AltTextContext";
import { PhotographerTextProvider } from "./Components/Context/PhotographerContext";

function App() {
  return (
    <MediaProvider>
      <AltTextProvider>
        <PhotographerTextProvider>
          <SubHeaderProvider>
            <div className={styles.div}>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/results" element={<SearchResults />} />
                  <Route path="/product" element={<ResultProduct />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </div>
          </SubHeaderProvider>
        </PhotographerTextProvider>
      </AltTextProvider>
    </MediaProvider>
  );
}

export default App;
