import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <WhatsappButton />
        <Router />
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
