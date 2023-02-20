// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="home"
                  pageSize={11}
                  country="in"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={11}
                  country="in"
                  category="business"
                ></News>
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={11}
                  country="in"
                  category="entertainment"
                ></News>
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={11}
                  country="in"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={11}
                  country="in"
                  category="health"
                ></News>
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={11}
                  country="in"
                  category="science"
                ></News>
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={11}
                  country="in"
                  category="sports"
                ></News>
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={11}
                  country="in"
                  category="technology"
                ></News>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
