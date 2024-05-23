import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Form from "./Form";
import Hourglass from "./Hourglass.jsx";
import Pear from "./Pear.jsx";
import Apple from "./Apple.jsx";
import Rectangle from "./Rectangle.jsx";
import Triangle from "./Triangle.jsx";
import {loadLocalStorage} from "./Storage.jsx";


export const App = () => {
    loadLocalStorage();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form/>}/>
                <Route path="/hourglass" element={<Hourglass/>}/>
                <Route path="/pear" element={<Pear/>}/>
                <Route path="/apple" element={<Apple/>}/>
                <Route path="/rectangle" element={<Rectangle/>}/>
                <Route path="/triangle" element={<Triangle/>}/>
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);