import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // necessary for react router.
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Pizza from "./Pages/Pizza";
import Burger from "./Pages/Burger";
import NoPage from "./Pages/NoPage";
//import TheTime from "./Time";
//import LightSwitch from "./LightSwitch"; 
//import Image from "./Image";

function App() { // App is the page itself
    // to add a new page, add to Route below inbetween Layout route
    // with a new route, including the path and the file name after you
    // import above, and add the link to Layout.js.
    return (
      /* How it's normally done is below, without React Router
         You put the content of the page between <> </>, and
         functions are their own tags OR can be called by { }'s.
      <>
          <div 
          "header"><h1>My First React App</h1></div>
          <div class="container">
          <p>Hello World!</p>
          <Image />
          <TheTime />
          </div>
          <div class="linkcontainer"><a href="">Home</a> <a href="">Burger</a> <a href="">Pizza</a> <a href="">Garlic Bread</a><br></br><span id="lightswitch" onClick={LightSwitch}>💡</span> Toggle Light/Dark Mode</div>
      </>
      */
     /* Browser Router, which is included with React Router.
        To remind you, a router is a library that decides what 
        web page is presented by a given URL. This middleware module 
        is used for all URL functions, as these are given a path to a 
        file that is rendered to open the next page.
        So a tl;dr: A router prerenders all your pages, so you don't have to
        load a new page each time you click a link, you stay on the same page
        without reloading.
        <BrowserRouter> -- declares the router
            <Routes> -- declares the container for the roots.
                <Route path="/" element={<Layout />}> - layout, necessary
                    <Route index element={<Home />} /> - landing page, index implies it is the default page.
                    <Route path="Pizza" element={<Pizza />} /> - additional pages should copy this, changing the path and name to match.
                    <Route path="Burger" element={<Burger />} />
                    <Route path="*" element={<NoPage />} /> - if we don't match a page, use a 404.
                </Route>
            </Routes>
        </BrowserRouter>
        */
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}> 
                    <Route index element={<Home />} />
                    <Route path="Pizza" element={<Pizza />} />
                    <Route path="Burger" element={<Burger />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}
export default App;