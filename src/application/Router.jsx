import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage"
import LogSongsPage from "../pages/LogSongs/LogSongsPage";
import BookingPage from "../pages/BookReading/BookReading"
import ArchivePage from "../pages/Archive/ArchivePage"
import Layout from "../layouts/Layout";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="log" element={<LogSongsPage />} />
                <Route path="booking" element={<BookingPage />} />
                <Route path="archive" element={<ArchivePage />} />
                </Route>
            </Routes> 
        </BrowserRouter>
    );
}

export default Router;
