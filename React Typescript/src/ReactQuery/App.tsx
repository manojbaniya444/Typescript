import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryFetch from "./QueryFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import AddProduct from "./AddProduct";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<QueryFetch />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
