import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedCerts from "./components/FeaturedCerts";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./pages/Certifications";

const Home = () => (
    <main className="bg-navy text-slate-100 min-h-screen" data-testid="home-page">
        <Hero />
        <About />
        <FeaturedCerts />
        <Skills />
        <Experience />
        <Education />
        <Contact />
    </main>
);

function App() {
    return (
        <div className="App">
            <Toaster
                position="top-right"
                theme="dark"
                toastOptions={{
                    style: {
                        background: "#0F1A33",
                        color: "#E2E8F0",
                        border: "1px solid #1E3358",
                        fontFamily: "Inter, sans-serif",
                    },
                }}
            />
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/certifications" element={<Certifications />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
