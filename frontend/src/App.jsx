import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChatsPage, HomePage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatsPage />} />
      </Routes>
    </>
  );
};

export default App;
