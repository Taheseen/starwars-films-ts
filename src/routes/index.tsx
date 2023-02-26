import { Suspense  } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FilmDetails from "../pages/FilmDetails/FilmDetails"
import Home from '../pages/Home/Home';
import Blank from '../pages/Blank/Blank';

export default function PageRouter() {
    return (
        <div>
            <Router>
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home/> }/>
                        <Route path="/:id" element={<FilmDetails/>} />
                        <Route path="/empty" element={<Blank/>} />
                        <Route path="*" element={<Navigate to="/" replace />}/>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}