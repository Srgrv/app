import React from "react";
import { Routes, Route } from "react-router-dom";

//styles
import "../src/styles/App.css";

//pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import TodoPage from "./pages/TodoPage";
import PostPage from "./pages/PostPage";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
