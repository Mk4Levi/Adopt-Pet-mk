import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Login from "./Login";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { AdoptedPetContext } from "../contexts/AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const adoptedPetHook = useState(null);
  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedPetHook}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <br />
          <br />
          <header>
            <Link to="/">Adopt MK!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
}

export default App;
