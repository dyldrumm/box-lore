import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import AboutPage from './Pages/AboutPage.js';
import HomePage from './Pages/HomePage.js';
import Layout from './Pages/Layout.js';

import {
  // Navigation
  BrowserRouter, Routes, Route, Link,
  // Page Transitions
  Switch, useLocation, useHistory
} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="aboutpage" element={<AboutPage />} />
              <Route path="homepage" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
