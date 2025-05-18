import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage"
import LoginPage from "../pages/Login/Login";
import BookingPage from "../pages/BookReading/BookReading"
import ArchivePage from "../pages/Archive/ArchivePage"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/archive" element={<ArchivePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
